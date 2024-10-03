import React, { useEffect } from "react";
import "./pdp.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  furnitureDetail,
  increment,
  decrement,
  addToCart,
} from "../../redux/fetchDataSlice"; // Import actions
import { useParams } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";

const Pdp = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { furnitureInfo } = useSelector((state) => state.furniture);

  // Fetch the furniture details when the component mounts
  useEffect(() => {
    if (productId) {
      dispatch(furnitureDetail(parseInt(productId)));
    }
  }, [dispatch, productId]);

  // Handle increment and decrement of the product quantity
  const handleIncrement = () => {
    if (furnitureInfo) {
      dispatch(increment(furnitureInfo.id));
    }
  };

  const handleDecrement = () => {
    if (furnitureInfo && furnitureInfo.quantity > 1) {
      dispatch(decrement(furnitureInfo.id));
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (furnitureInfo) {
      dispatch(addToCart(furnitureInfo.id));  // Dispatch the action to add the product to the cart
    }
  };

  if (!furnitureInfo) {
    return (
      <div className="loading">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="pdp">
      {/* Check if furnitureInfo exists and display product details */}
      {furnitureInfo ? (
        <div className="pdpWrapper">
          <div className="pdpLeft">
            <img src={furnitureInfo.imageUrl} alt={furnitureInfo.name} />
          </div>
          <div className="pdpRight">
            {/* Display the offer if it exists */}
            {furnitureInfo.offer && <div className="offers">{furnitureInfo.offer}</div>}
            <h2>{furnitureInfo.name}</h2>
            <p>{furnitureInfo.description}</p>

            <div className="priceValue">
              {/* Check if prices are valid numbers before using toFixed */}
              <p>Price: ${furnitureInfo.totalPrice ? furnitureInfo.totalPrice.toFixed(2) : "N/A"}</p>
              <p>Previous Price: ${furnitureInfo.previousPrice ? furnitureInfo.previousPrice.toFixed(2) : "N/A"}</p>
            </div>

            {/* Display the stock availability */}
            <div
              className={`inStock ${furnitureInfo.stock ? "available" : "outOfStock"}`}
            >
              {furnitureInfo.stock ? (
                <>
                  <CheckBox /> <span>In Stock</span>
                </>
              ) : (
                "Out of Stock"
              )}
            </div>

            {/* Quantity increment and decrement */}
            <div className="inc-dec">
              <div className="dec" onClick={handleDecrement}>
                -
              </div>
              <div>{furnitureInfo.quantity}</div>
              <div className="inc" onClick={handleIncrement}>
                +
              </div>
            </div>

            {/* Buttons for Buy Now and Add to Cart */}
            <div className="btns">
              <button disabled={!furnitureInfo.stock}>Buy Now</button>
              <button
                onClick={handleAddToCart}
                disabled={!furnitureInfo.stock || furnitureInfo.quantity < 1}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>No product details found</div>
      )}
    </div>
  );
};

export default Pdp;
