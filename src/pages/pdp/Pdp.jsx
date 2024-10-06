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
import { useNavigate } from "react-router-dom";

const Pdp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { furnitureInfo } = useSelector((state) => state.furniture);

  // Fetch the furniture details when the component mounts
  useEffect(() => {
    if (productId) {
      dispatch(furnitureDetail(parseInt(productId)));
    }
  }, [dispatch, productId]);

  // Handle add to cart
  const handleAddToCart = () => {
    if (furnitureInfo) {
      dispatch(addToCart(furnitureInfo.id));
      // navigate("/cart");
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
      {furnitureInfo ? (
        <div className="pdpWrapper">
          <div className="pdpLeft">
            <img src={furnitureInfo.imageUrl} alt={furnitureInfo.name} />
          </div>
          <div className="pdpRight">
            {furnitureInfo.offer && (
              <div className="offers">{furnitureInfo.offer}</div>
            )}
            <h2>{furnitureInfo.name}</h2>
            <p>{furnitureInfo.description}</p>

            <div className="priceValue">
              <p>
                Price: $
                {furnitureInfo.totalPrice
                  ? furnitureInfo.totalPrice.toFixed(2)
                  : "N/A"}
              </p>
              <p>
                Previous Price: $
                {furnitureInfo.previousPrice
                  ? furnitureInfo.previousPrice.toFixed(2)
                  : "N/A"}
              </p>
            </div>
            <div
              className={`inStock ${
                furnitureInfo.stock ? "available" : "outOfStock"
              }`}
            >
              {furnitureInfo.stock ? (
                <>
                  <CheckBox /> <span>In Stock</span>
                </>
              ) : (
                "Out of Stock"
              )}
            </div>
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
