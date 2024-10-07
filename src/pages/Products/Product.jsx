import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, fetchingData, furnitureDetail } from "../../redux/fetchDataSlice";
import "./products.scss";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, wishList } = useSelector((state) => state.furniture);

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  const handleClick = (itemId) => {
    dispatch(furnitureDetail(itemId));
    navigate(`product/${itemId}`);
  };

  const handleFavoriteToggle = (itemId) => {
    dispatch(addToWishList(itemId));
  };

  return (
    <div className="homeCategory">
      {data.map((item) => {
        // Check if the item is in the wishlist
        const isFavorited = wishList.some((wishItem) => wishItem.id === item.id);

        return (
          <div
            style={{ position: "relative" }}
            title={item.name}
            onClick={() => handleClick(item.id)}
            key={item.id}
          >
            <img src={item.imageUrl} alt={item.name} />
            {isFavorited ? (
              <FavoriteIcon
                className="favIcon"
                style={{ color: "red" }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the item click
                  handleFavoriteToggle(item.id); // Toggle favorite status
                }}
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                className="favIcon"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the item click
                  handleFavoriteToggle(item.id); // Toggle favorite status
                }}
              />
            )}
            <div className="plpBottom">
              <div className="name-price">
                <div className="productTitle">
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
