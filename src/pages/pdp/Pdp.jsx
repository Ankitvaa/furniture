import React, { useEffect } from "react";
import "./pdp.scss";
import { useSelector, useDispatch } from "react-redux";
import { furnitureDetail } from "../../redux/fetchDataSlice"; // Assuming this action fetches the product details
import { useParams } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";

const Pdp = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { furnitureInfo } = useSelector((state) => state.furniture);
  console.log(furnitureInfo);
  useEffect(() => {
    if (productId) {
      dispatch(furnitureDetail(parseInt(productId)));
    }
  }, [dispatch, productId]);

  return (
    <div className="pdp">
      {furnitureInfo ? (
        <div className="pdpWrapper">
          <div className="pdpLeft">
            <img src={furnitureInfo.imageUrl} alt={furnitureInfo.name} />
          </div>
          <div className="pdpRight">
            <div className="offers">{furnitureInfo.offer}</div>
            <h2>{furnitureInfo.name}</h2>
            <p>{furnitureInfo.description}</p>
            <div className="priceValue">
              <p>Price: ${furnitureInfo.price}</p>
              <p>{furnitureInfo.previousPrice}</p>
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
              <button>Buy Now</button>
              <button>Add To Cart</button>
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
