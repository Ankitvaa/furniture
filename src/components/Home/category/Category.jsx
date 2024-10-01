import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./category.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { filterFurniture } from "../../../redux/fetchDataSlice";

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <ArrowForwardIcon />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <ArrowBackIcon />
    </div>
  );
};

const images = [
  { id: 1, url: "/1.jpg", alt: "Image 1", name: "Table", category: "Living Room" },
  { id: 2, url: "/2.jpg", alt: "Image 2", name: "Chair", category: "Bedroom" },
  { id: 3, url: "/3.jpg", alt: "Image 3", name: "Desk", category: "Office" },
  { id: 4, url: "/4.jpg", alt: "Image 4", name: "Cabinet", category: "Kitchen" },
  { id: 5, url: "/5.jpg", alt: "Image 5", name: "Sofa", category: "Living Room" },
];

const categories = [
  "All",
  "Living Room",
  "Bedroom",
  "Office",
  "Kitchen",
  "Outdoor",
  "Dining Room",
  "Entryway",
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, // Use the custom Next arrow
    prevArrow: <PrevArrow />, // Use the custom Prev arrow
  };

  const handleFilter = (category) => {
    setSelectedCategory(category); // Set the selected category
    dispatch(filterFurniture(category)); // Dispatch the filter action
  };

  // Filter images based on the selected category
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="carousel-container">
        <div className="Featuretitle">Feature Product</div>

        {/* Image Slider */}
        <Slider {...settings}>
          {categories.map((filterItem) => (
            <div
              key={filterItem}
              className={`category-item ${filterItem === selectedCategory ? "active" : ""}`}
              onClick={() => handleFilter(filterItem)}
              style={{ cursor: "pointer" }} // Make the div act like a button
            >
              {filteredImages.map((item) => (
                <div key={item.id} className="sliders">
                  <div className="imgCrousal">
                    <img src={item.url} alt={item.alt} />
                    <div className="catTitle">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Category;
