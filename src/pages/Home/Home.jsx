import Category from "../../components/Home/category/Category";
import "./home.scss";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const Home = () => {
  return (
    <>
      <div className="home">
      <div className="homeWrapper">
        <div className="homeLeft">
          <div className="leftTop">
            <p>Furniture Design Ideas</p>
            <div>Modern Iterior Design Studio</div>
          </div>

          <div className="leftCenter">
            <div className="desc">
              Choosing the right furniture for your home online will add
              elegance and functionality to your interior while also being cost
              effective and long lasting
            </div>
            <div className="lcLinks">
              <div className="shopNow">
               <div>Shop Now</div>
               <ArrowRightAltOutlinedIcon />
              </div>
              <div className="follow-on-insta">Follow Instagram</div>
            </div>
          
          </div>
          <div className="leftBottom">
            <div className="ourworth">
              <div>2500+</div>
              <p>Unique Styles</p>
            </div>
            <div className="ourworth">
              <div>5000+</div>
              <p>Happy Customer</p>
            </div>
            <div className="ourworth">
              <div>300+</div>
              <p>Certified Outlets</p>
            </div>
          </div>
        </div>
        <div className="homeRight">
        </div>
      </div>
    </div>
        <Category/>

    </>
  
  );
};

export default Home;
