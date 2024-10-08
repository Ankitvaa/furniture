import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./category.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { filterFurniture } from "../../../redux/fetchDataSlice";
import { useNavigate } from "react-router-dom";

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

const filterimages = [
  {
    id: 1,
    url: "/1.jpg",
    alt: "Image 1",
    name: "Table",
    category: "livingRoom",
  },
  { id: 2, url: "/2.jpg", alt: "Image 2", name: "Chair", category: "Bedroom" },
  { id: 3, url: "/3.jpg", alt: "Image 3", name: "Desk", category: "Office" },
  {
    id: 4,
    url: "/4.jpg",
    alt: "Image 4",
    name: "Cabinet",
    category: "Kitchen",
  },
  {
    id: 5,
    url: "/1.jpg",
    alt: "Image 5",
    name: "Sofa",
    category: "LivingRoom",
  },
];

const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // For tablet screens and below
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, // For mobile screens and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};


  const handleClick = (catId) => {
    dispatch(filterFurniture(catId));
    navigate(`category/${catId.toLowerCase()}`);
  };

  return (
    <>
      <div className="carousel-container">
        <div className="Featuretitle">Feature Product</div>
        <Slider {...settings}>
          {filterimages.map((item) => (
            <div title={item.name}
              key={item.id}
              className="sliders"
              onClick={() => handleClick(item.category)}
            >
              <div className="imgCrousal">
                <img src={item.url} alt={item.alt} />
                <div className="catTitle">{item.name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Category;
