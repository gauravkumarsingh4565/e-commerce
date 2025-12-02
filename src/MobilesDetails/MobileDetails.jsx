import React, { useEffect, useState } from "react";
import "./MobileDetails.css";
import Navbar from "../Dashboard/navbar";
import Category from "../Category/category";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const MobileDetailPage = () => {
  const [mobileDetails, setMobileDetails] = useState([]);
  const [cartCounts, setCartCounts] = useState({});

  
  useEffect(() => {
    const getMobileDetails = async () => {
      try {
        const snap = await getDocs(collection(db, "mobile"));
        console.log("Docs found:", snap.size);
        snap.forEach((doc) => console.log("Doc:", doc.id, doc.data()));
  
        const mobileList = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMobileDetails(mobileList);
      } catch (err) {
        console.error("Error fetching mobile details:", err);
      }
    };
    getMobileDetails();
  }, []);


  const handleAdd = (id) => {
    setCartCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

 
  const handleRemove = (id) => {
    setCartCounts((prevCounts) => {
      const currentCount = prevCounts[id] || 0;
      if (currentCount > 0) {
        return { ...prevCounts, [id]: currentCount - 1 };
      }
      return prevCounts;
    });
  };


  const totalItems = Object.values(cartCounts).reduce((a, b) => a + b, 0);

  console.log("mobileDetails", mobileDetails);

  return (
    <>
      {/* <Navbar /> */}
      {/* <Category /> */}
      <div className="mobile-list">
        <h2>Mobile Products</h2>
        <h3>Total Items in Cart: {totalItems}</h3>

        <div className="mobile-grid">
          {mobileDetails.length === 0 ? (
            <p>Loading mobile details...</p>
          ) : (
            mobileDetails.map((mobile) => (
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

                <div className="cart-controls">
                  <button onClick={() => handleRemove(mobile.id)}>-</button>
                  <span>{cartCounts[mobile.id] || 0}</span>
                  <button onClick={() => handleAdd(mobile.id)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MobileDetailPage;
