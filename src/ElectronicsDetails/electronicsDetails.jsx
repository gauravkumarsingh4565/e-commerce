import React, { useEffect, useState } from "react";
import "./electronicsDetails.css";
import Navbar from "../Dashboard/navbar";
import Category from "../Category/category";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ElectronicsDetails = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const getElectronicsDetails = async () => {
      try {
        console.log("🔥 Fetching Electronics...");

        const ref = collection(db, "Electronics"); 
        const snap = await getDocs(ref);

        console.log("Docs found:", snap.size);

        const electronicsList = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setElectronics(electronicsList);
      } catch (err) {
        console.error("Error fetching electronics details:", err);
      }
    };

    getElectronicsDetails();
  }, []);

  return (
    <>    
      {/* <Navbar /> */}
      {/* <Category /> */}

      <div className="electronics-list">
        <h2>Electronics Products</h2>

        <div className="electronics-grid">
          {electronics.length === 0 ? (
            <p>Loading electronics...</p>
          ) : (
            electronics.map((product) => (
              <div key={product.id} className="electronics-item">
                <img
                  src={product.image}
                  alt={product.title}
                  className="electronics-img"
                />

                <h4>{product.title}</h4>

                <p><strong>Price:</strong> ₹{product.price}</p>

                <p>
                  <strong>Rating:</strong>{" "}
                  {product?.rating ?? "No Rating"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ElectronicsDetails;
