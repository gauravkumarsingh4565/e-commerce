import React, { useState } from "react";
import mobileData from "../mobileJsonData";
import "./MobileDetails.css";
import Navbar from "../Dashboard/navbar";
import Category from "../Category/category";

const MobileDetailPage = () => {
  // State for product counts
  const [cartCounts, setCartCounts] = useState({});

  // Add product to cart
  const handleAdd = (id) => {
    setCartCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  // Remove product from cart
  const handleRemove = (id) => {
    setCartCounts((prevCounts) => {
      const currentCount = prevCounts[id] || 0;
      if (currentCount > 0) {
        return { ...prevCounts, [id]: currentCount - 1 };
      }
      return prevCounts;
    });
  };

  // Calculate total items in cart
  const totalItems = Object.values(cartCounts).reduce((a, b) => a + b, 0);

  return (
    <>
      <Navbar />
      <Category />
      <div className="mobile-list">
        <h2>Mobile Products</h2>
        <h3>Total Items in Cart: {totalItems}</h3>
        <div className="mobile-grid">
          {mobileData.map((mobile) => (
            <div key={mobile.id} className="mobile-item">
              <img
                src={mobile.image}
                alt={mobile.model}
                className="mobile-img"
              />
              <h4>
                {mobile.brand} - {mobile.model}
              </h4>
              <p>Price: ₹{mobile.price}</p>
              <p>Rating: {mobile.rating} ⭐</p>

              {/* Add/Remove buttons */}
              <div className="cart-controls">
                <button onClick={() => handleRemove(mobile.id)}>-</button>
                <span>{cartCounts[mobile.id] || 0}</span>
                <button onClick={() => handleAdd(mobile.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileDetailPage;
