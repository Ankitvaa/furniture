import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import "./header.scss";

const Header = () => {
  return (
    <div className='header'>
        <div className="headerWrapper">
               <div className="headerLeft">
           <span>Follow Us</span>
           <InstagramIcon/>
           <XIcon/>
           <LinkedInIcon/>
        </div>
        <div className="headerCenter">
            Sign up get 20% Off for all collection
        </div>
        <div className="headerRight">
            <AddIcCallIcon/>
            +91 9987266397
        </div>
        </div>
     
    </div>
  )
}

export default Header
