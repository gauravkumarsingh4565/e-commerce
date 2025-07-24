
import React from "react";
import mobileData from "../mobileJsonData";
import "./MobileDetails.css"
import Navbar from "../Dashboard/navbar";
import Category from "../Category/category";

const MobileDetailPage = () => {
   
    
 
    return (
      <>
        <Navbar/>
        <Category/>
        <div className="mobile-list">
          <h2>Mobile Products</h2>
          <div className="mobile-grid">
            {mobileData.map((mobile) => (
              <div key={mobile.id} className="mobile-item">
                <img src={mobile.image} alt={mobile.model} className="mobile-img" />
                <h4>{mobile.brand} - {mobile.model}</h4>
                <p>Price: ₹{mobile.price}</p>
                <p>Rating: {mobile.rating} ⭐</p>
              </div>
            ))}
          </div>
        </div>
        </>
      );
    };

export default MobileDetailPage;
