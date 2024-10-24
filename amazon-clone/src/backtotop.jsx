import React from 'react'
import "./backtotop.css"
import "./header"
import LanguageIcon from '@mui/icons-material/Language';

const Backtotop = () => {
  return (
    <div>
        <div className="backtotop">
            <h4>Back to top</h4>
            <div className="info-box">
            <div className="information">
            <div className="info">
                <h5>Get to Know Us</h5>
                <ul>
                    <li>About Amazon</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Science</li>
                </ul>

            </div>
            <div className="info">
                <h5>Connect with Us</h5>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
                </div>
<div className="info">
    <h5>Make Money With Us</h5>
    <ul>
        <li>Sell on Amazon</li>
        <li>Sell under Amazon Accelerator</li>
        <li>Protect and Build Your Brand</li>
        <li>Amazon Global Selling</li>
        <li>Supply to Amazon</li>
        <li>Become an Affiliate</li>
        <li>Fulfilment by Amazon</li>
        <li>Advertise Your Products</li>
        <li>Amazon Pay on Merchants</li>
    </ul>
</div>
<div className="info">
    <h5>Let Us Help You</h5>
    <ul>
        <li>Your Account</li>
        <li>Returns Centre</li>
        <li>Recalls and Product Safety Alerts</li>
        <li>100% Purchase Protection</li>
        <li>Amazon App Download</li>
        <li>Help</li>
        </ul>
</div>

</div>
<hr className='horiz'/>
<div className="amazon">
    <img src="amazonlogo.png" className="amazon-logo" alt="" />
    <button className="lang">
    <LanguageIcon/>

<select name="lang" id="lang">
        <option value="english">
         English</option>
s
    <option value="hindi">Hindi</option>
    <option value="telugu">Telugu</option>

</select>
    </button>
    <div className="country">
        <img src="flag.png"></img>
        <span>India</span>
    </div>
</div>
</div>

</div>


        </div>
      
  )
}

export default Backtotop;
