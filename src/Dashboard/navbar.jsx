import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) setUser(userData);
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("user");
      setUser(null);
      setShowDrawer(false);
      navigate("/");
    });
  };

  return (
    <>
      <div className="navbar">

        {/* Logo Section */}
        <div className="logo-section" onClick={() => navigate("/home")}>
          <div className="plus-text" style={{ cursor: "pointer" }}>
            <span className="ecom">QuickBuy</span>
            <br />
            <span className="explore">Explore&nbsp;</span>
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

        {/* Search Section */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="cart-box">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-badge">4</span>
          </div>

          <div className="user-circle" onClick={() => setShowDrawer(true)}>
            {user?.name?.slice(0, 2).toLowerCase()}
          </div>
        </div>
      </div>

      {/* USER PROFILE DRAWER */}
      <div className={`drawer ${showDrawer ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>User Profile</h3>
          <span className="close-btn" onClick={() => setShowDrawer(false)}>
            ✖
          </span>
        </div>

        <div className="drawer-content">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {showDrawer && <div className="overlay" onClick={() => setShowDrawer(false)} />}
    </>
  );
};

export default Navbar;
