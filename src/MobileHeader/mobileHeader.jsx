import React, { useState, useEffect } from "react";
import "./mobileHeader.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const MobileHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) setUser(userData);
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("user");
      setUser(null);
      setDrawerOpen(false);
      window.location.href = "/"; // Redirect to login
    });
  };

  return (
    <>
      <div className="mobile-header">
        {/* Hamburger */}
        <div className="mobile-menu-icon" onClick={() => setDrawerOpen(true)}>
          <FaBars />
        </div>

        {/* Right Section */}
        <div className="mobile-right">
          <FaShoppingCart className="mobile-cart-icon" />
          <div className="mobile-user-circle">
            {user?.name?.slice(0, 2).toUpperCase() || "U"}
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-profile">
            <div className="drawer-user-circle">
              {user?.name?.slice(0, 2).toUpperCase() || "U"}
            </div>
            <div className="drawer-user-info">
              <p>{user?.name || "User Name"}</p>
            </div>
          </div>
        </div>

        <div className="drawer-menu">
          <p>Category</p>
          <p>About Us</p>
          <p>Settings</p>
        </div>

        <div className="drawer-logout">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />}
    </>
  );
};

export default MobileHeader;
