import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navLeft">
            <Link to="/" style={{display:"flex"}}>
              <div style={{color:"rgb(236, 154, 1)"}}>
                F
              </div>
              <div>
            urniFlex.
              </div>
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
          <FavoriteBorderOutlinedIcon />
          <ShoppingBagOutlinedIcon />
          <PersonOutlineOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
