import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingData, furnitureDetail } from "../../redux/fetchDataSlice";
import "./products.scss";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.furniture);
  const [favorites, setFavorites] = useState([]); // State to manage favorites

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  const handleClick = (itemId) => {
    dispatch(furnitureDetail(itemId));
    navigate(`product/${itemId}`);
  };

  const handleFavoriteToggle = (itemId) => {
    // Toggle the favorite status
    setFavorites(
      (prevFavorites) =>
        prevFavorites.includes(itemId)
          ? prevFavorites.filter((id) => id !== itemId) // Remove from favorites
          : [...prevFavorites, itemId] // Add to favorites
    );
    console.log(itemId);
  };

  return (
    <div className="homeCategory">
      {data.map((item) => {
        const isFavorited = favorites.includes(item.id); // Check if the item is favorited

        return (
          <div
            style={{ position: "relative" }}
            title={item.name}
            onClick={() => handleClick(item.id)}
            key={item.id}
          >
            <img src={item.imageUrl} alt={item.name} />
            <FavoriteBorderOutlinedIcon
              className="favIcon"
              style={{
                color: isFavorited ? "#fff" : "#fff",
                backgroundColor: isFavorited ? "red" : "transparent",
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the item click
                handleFavoriteToggle(item.id); // Toggle favorite status
              }}
            />
            <div className="plpBottom">
              <div className="name-price">
                <div key={item.name} className="productTitle">
                  {item.name}
                </div>
                <div className="productPrice">{item.price}</div>
              </div>
              <div className="cartIcon">
                <ShoppingCart />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
