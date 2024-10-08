import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { furnitureData } from "../data";

export const fetchingData = createAsyncThunk("fetch/data", async () => {
  return furnitureData;
});

const initialState = {
  status: false,
  data: [],
  error: null,
  filterData: [],
  furnitureInfo: null,
  wishList: [],
  cart: [],
  subtotal: 0, // Added subtotal field
  currentPage: 1, // The current page number
  itemsPerPage: 10, // Number of items per page
  totalItems: 0,
};

const fetchData = createSlice({
  name: "Fetching Data",
  initialState,
  reducers: {
    filterFurniture: (state, action) => {
      const category = action.payload.trim().toLowerCase();
      if (category === "all") {
        state.filterData = state.data;
      } else {
        state.filterData = state.data.filter((item) => {
          return (
            item.category.toLowerCase().replace(/\s+/g, "") ===
            category.replace(/\s+/g, "")
          );
        });
      }
    },
    furnitureDetail: (state, action) => {
      const fDetails = action.payload;
      const product = state.data.find(
        (productInfo) => productInfo.id === fDetails
      );
      if (product) {
        state.furnitureInfo = {
          ...product,
          quantity: 1, // Initial quantity is 1
          totalPrice: product.price, // Total price is initially just the product price
        };
      }
    },
    increment: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cart.find((item) => item.id === productId);
      if (cartItem) {
        cartItem.quantity += 1;
        cartItem.totalPrice = cartItem.price * cartItem.quantity;
      }
      // Recalculate subtotal after increment
      state.subtotal = calculateSubtotal(state.cart);
    },
    decrement: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cart.find((item) => item.id === productId);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        cartItem.totalPrice = cartItem.price * cartItem.quantity;
      }
      // Recalculate subtotal after decrement
      state.subtotal = calculateSubtotal(state.cart);
    },
    addToCart: (state, action) => {
      const cartId = action.payload;
      const isProductInCart = state.cart.find((item) => item.id === cartId);

      if (isProductInCart) {
        isProductInCart.quantity += 1;
        isProductInCart.totalPrice =
          isProductInCart.price * isProductInCart.quantity;
      } else {
        const productToAdd = state.furnitureInfo;

        if (productToAdd) {
          // If product is found, add it to the cart with the current quantity and totalPrice
          state.cart.push({
            ...productToAdd,
            totalPrice: productToAdd.price, // Set totalPrice initially to price
          });
        }
      }
      // Recalculate subtotal after adding to cart
      state.subtotal = calculateSubtotal(state.cart);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
      state.subtotal = calculateSubtotal(state.cart);
    },
    addToWishList: (state, action) => {
      const addWish = action.payload;
      const wishItem = state.wishList.find((item) => item.id === addWish);
      if (wishItem) {
        state.wishList = state.wishList.filter((item) => item.id !== addWish)
      }
      else {
        const newWish = state.data.find((item) => item.id === addWish)
        state.wishList.push({
          ...newWish,
        })
      }
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter((item) => item.id !== action.payload)
    },
    addToCartFromWishList: (state, action) => {
      const cartId = action.payload;
      const isProduct = state.cart.find((item) => item.id === cartId);
      if (isProduct) {

      }
      else {
        const productToAdd = state.wishList.find((item) => item.id === cartId);
        state.cart.push({
          ...productToAdd,
          quantity: 1,
          totalPrice: productToAdd.price, // Set totalPrice initially to price

        })
      }
      state.subtotal = calculateSubtotal(state.cart);
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchingData.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(fetchingData.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
        state.filterData = action.payload;
      })
      .addCase(fetchingData.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

// Function to calculate subtotal
const calculateSubtotal = (cart) => {
  return cart.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
};

export const {
  filterFurniture,
  furnitureDetail,
  increment,
  decrement,
  addToCart,
  removeFromCart,
  addToWishList,
  removeFromWishList,
  addToCartFromWishList
} = fetchData.actions;
export default fetchData.reducer;
