import React from "react";
import "./mobileHeader.css";
import { FaBars } from "react-icons/fa";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const MobileHeader = () => {
  return (
    <div className="mobile-navbar">
      <div className="mobile-left">
        <FaBars className="menu-icon" />
      </div>

      <div className="mobile-right">
        <FaShoppingCart className="cart-icon" />
        <FaUserCircle className="user-icon" />
      </div>
    </div>
  );
};

export default MobileHeader;
