import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart,wishList} = useSelector((state) => state.furniture);
  console.log(wishList.length)
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navLeft">
          <Link to="/" style={{ display: "flex" }}>
            <div style={{ color: "rgb(236, 154, 1)" }}>F</div>
            <div>urniFlex.</div>
          </Link>
        </div>
        <div className="navCenter">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navRight">
          <SearchOutlinedIcon />
          <div onClick={()=>navigate("/wishList")} className="wishListIcon">
          <FavoriteBorderOutlinedIcon />
          <div className="wishCount">{wishList.length}</div>
          </div>
          <div className="add-to-cart" onClick={() => navigate("/cart")}>
            <ShoppingBagOutlinedIcon />
            <div className="cart-count">{cart.length}</div>
          </div>
          <PersonOutlineOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
