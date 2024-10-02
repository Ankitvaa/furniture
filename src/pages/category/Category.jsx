import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./category.scss";
import { filterFurniture, furnitureDetail } from "../../redux/fetchDataSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { status, error, filterData } = useSelector((state) => state.furniture);
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(filterFurniture(categoryName));
  }, [categoryName, dispatch]);

const handleClick =(filterId)=>{
  dispatch(furnitureDetail(filterId))
  navigate(`product/${filterId}`)
}

  return (
    <div className="categories">
      {filterData.length > 0 ? (
        filterData.map((item) => (
          <div className="category" key={item.id} title={item.name} onClick={()=>handleClick(item.id)}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="name-price">
              <div key={item.name} className="productTitle">
                {item.name}
              </div>
              <div className="productPrice">{item.price}</div>
            </div>
          </div>
        ))
      ) : (
        <div>No items found for the category: {categoryName}</div>
      )}
    </div>
  );
};

export default Category;
