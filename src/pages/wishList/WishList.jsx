import "./wishlist.scss";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { addToCart, addToCartFromWishList, removeFromWishList } from "../../redux/fetchDataSlice";

const WishList = () => {
  const { wishList} = useSelector((state) => state.furniture);

  const dispatch = useDispatch();

  const handleClick=(item)=>{
    dispatch(removeFromWishList(item))
  }

  const handleAddToCart=(item)=>{
    dispatch(addToCartFromWishList(item))
  }
  return (
    <div className="wishList">
      {wishList.map((item) => {
        return (
          <>
            <div className="wish">
              <div className="imageWrapper">
                <img src={item.imageUrl} alt={item.name} />
                <ClearOutlinedIcon className="crossBtn" onClick={()=>handleClick(item.id)}/>
              </div>

              <div className="plpBottom">
                <div className="name-price">
                  <div className="productTitle">{item.name}</div>
                  <div className="productPrice">{item.price}</div>
                </div>
                <div className="cartIcon">
                  <ShoppingCart onClick={()=>handleAddToCart(item.id)}/>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default WishList;
