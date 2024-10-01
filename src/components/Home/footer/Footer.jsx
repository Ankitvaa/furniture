import "./footer.scss";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerlogo">
          <div className="logoColor">F</div>
          <div className="mainlogo">urniFlex</div>
        </div>
        <div className="footerBottom">
          <div className="footerTitles">
            <div className="footerTitle">About</div>
            <div className="footerContent">
              <div>Our Company</div>
              <div>Our Story</div>
              <div>Blog</div>
            </div>
          </div>
          <div className="footerTitles">
            <div className="footerTitle">Information</div>
            <div>Our Company</div>
            <div>Our Story</div>
            <div>Blog</div>
          </div>
          <div className="footerTitles">
            <div className="footerTitle">Support</div>
            <div>Our Company</div>
            <div>Our Story</div>
            <div>Blog</div>
          </div>
        </div>

    
      </div>
          <div className="copyrights">
            <div className="copyrightsWrapper">
            <div className="copyLeft">Copyright@2024 FurniFlex.All Right Reserved.</div>
            <div className="copyCenter">
                <FacebookOutlinedIcon/>
                <XIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
            </div>
            <div className="copyRight"></div>
            </div>
          
        </div>
    </div>
  );
};

export default Footer;
