// src/redux/fetchDataSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { furnitureData } from "../data"; // Assuming this is where your furnitureData is from

// Async thunk to fetch furniture data
export const fetchingData = createAsyncThunk("fetch/data", async () => {
  return furnitureData;
});

const initialState = {
  status: false,
  data: [],
  error: null,
  filterData: [],
  furnitureInfo: null, // Changed to null initially
  cart: [],
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

    increment: (state) => {
      if (state.furnitureInfo) {
        state.furnitureInfo.quantity += 1; // Increment quantity
        state.furnitureInfo.totalPrice =
          state.furnitureInfo.price * state.furnitureInfo.quantity; // Update total price
      }
    },

    decrement: (state) => {
      if (state.furnitureInfo && state.furnitureInfo.quantity > 1) {
        state.furnitureInfo.quantity -= 1; // Decrement quantity, ensuring it doesn't go below 1
        state.furnitureInfo.totalPrice =
          state.furnitureInfo.price * state.furnitureInfo.quantity; // Update total price
      }
    },

    addToCart: (state, action) => {
      const cartId = action.payload;
      const isProductInCart = state.cart.find((item) => item.id === cartId); // Check if product already exists in cart

      if (isProductInCart) {
        // If product exists, increment its quantity and update totalPrice
        isProductInCart.quantity += 1;
        isProductInCart.totalPrice = (
          isProductInCart.price * isProductInCart.quantity
        ).toFixed(2);
      } else {
        const productToAdd = state.furnitureInfo;

        if (productToAdd) {
          // If product is found, add it to the cart with the current quantity and totalPrice
          state.cart.push({
            ...productToAdd,
          });
        }
      }
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

export const {
  filterFurniture,
  furnitureDetail,
  increment,
  decrement,
  addToCart,
} = fetchData.actions;
export default fetchData.reducer;
