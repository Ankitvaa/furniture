import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutline } from "@mui/icons-material";
import "./cart.scss";
import {
  increment,
  decrement,
  removeFromCart,
} from "../../redux/fetchDataSlice"; // Import actions

export const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.furniture);

  // Function to handle increment for a specific item
  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decrement(id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const proceedToCheckout = () => {
    console.log();
  };

  // Calculate the total price and total quantity
  const calculateTotals = () => {
    return cart.reduce(
      (totals, item) => {
        totals.totalPrice += item.totalPrice ? parseFloat(item.totalPrice) : 0;
        totals.totalQuantity += item.quantity;
        return totals;
      },
      { totalPrice: 0, totalQuantity: 0 }
    );
  };

  const { totalPrice, totalQuantity } = calculateTotals();

  return (
    <>
      <div className="cartMain">
        <div className="cartPage">
          <div className="cart-header">
            <div className="header-product">Product</div>
            <div className="header-price">Price</div>
            <div className="header-quantity">Quantity</div>
            <div className="header-subtotal">Subtotal</div>
          </div>

          {cart.map((item) => (
            <div className="cart" key={item.id}>
              <div className="product-nameImg">
                <img src={item.imageUrl} alt={item.name} />
                <div className="product-name">{item.name}</div>
              </div>
              <div className="product-prices">
                <div>${item.price ? item.price.toFixed(2) : "N/A"}</div>
                <div className="inc-dec">
                  <div
                    className="dec"
                    onClick={() => handleDecrement(item.id, item.quantity)}
                  >
                    -
                  </div>
                  <div>{item.quantity}</div>
                  <div className="inc" onClick={() => handleIncrement(item.id)}>
                    +
                  </div>
                </div>
                <div>
                  ${item.totalPrice ? item.totalPrice.toFixed(2) : "N/A"}
                </div>
                <DeleteOutline onClick={() => handleRemove(item.id)} />
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <div className="order-summaryTitle">
            <h2>Order Summary</h2>
          </div>
          <div className="summaryItems">
            <div className="summary-item">
              <span>Total Quantity:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="summary-item">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="btnWrapper">
            <button onClick={proceedToCheckout}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
