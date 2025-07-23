import React, { useState, useEffect } from "react";
import "./navbar.css";
import {
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
      console.log("USER DATA in nav", userData);
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-section">
          <div className="plus-text">
            <span className="ecom">QuickBuy </span>
            <br />
            <span className="explore"> Explore&nbsp;</span>
            <span className="plus">
              Plus&nbsp;
              <img
                src="https://img.icons8.com/color/20/000000/plus-math.png"
                alt="plus-icon"
                className="plus-icon"
              />
            </span>
          </div>
        </div>

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        <div className="right-section">
          <div className="nav-item">
            <FaShoppingCart />
            <span>Cart</span>
          </div>
          <div className="nav-item">
            <FaUserCircle />
            {user ? (
              <div className="user-info">
                <span>{user.name}</span>
                <button
                  onClick={() => setShowConfirm(true)}
                  className="logout-button"
                >
                  Logout
                </button>
              </div>
            ) : (
              <span onClick={() => navigate("/")}>Login</span>
            )}
          </div>
        </div>
      </div>

    
      {showConfirm && (
        <div className="confirm-dialog">
          <div className="dialog-box">
            <p>Are you sure you want to logout?</p>
            <div className="dialog-actions">
              <button
                onClick={() => {
                  handleLogout();
                  setShowConfirm(false);
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowConfirm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
