import React from "react";
import "./header.css";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useCart } from "./context/cartcontext";
function Header() {
  const {cartItems}=useCart()
  return (
    <>
    <div className="header">
      <img
      src="amazonlogo.png"
        alt="logo"
        className="amazon-logo"
      />
      <div className="header-search">
        <input type="text" className="header-searchInput" placeholder="Search Amazon.in" />
    <SearchIcon  className="header-searchIcon"/>

      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest</span>
          <span className="header-optionLineTwo">Sign in</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">&Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

      </div>
       

      <div className="header-basket">
       <Link to="/cart">

     < ShoppingBasketOutlinedIcon className="basket-icon"/>
     <span className="items">{cartItems.length}</span>
     </Link>

      </div>

    </div>

      <div className="submenu">
        <ul>
          <Link to="/mobiles"><li>Mobiles</li></Link>
          <Link to="/menwear"><li>MenWear</li></Link>
          <Link to="/furniture"><li>Furniture</li></Link>
          <Link to="/tv"><li>TV</li></Link>
          <Link to="/AC"><li>AC</li></Link>
          <Link to="/women"><li>Womenwear</li></Link>
          <Link to="/books"><li>Books</li></Link>
          </ul>
      </div>
    </>
  );
}

export default Header;
