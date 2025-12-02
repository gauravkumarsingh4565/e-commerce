import React, { useEffect, useState } from "react";
import "./FashionDetails.css";
import Navbar from "../Dashboard/navbar";
import Category from "../Category/category";

const FashionDetails = () => {
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menRes, womenRes] = await Promise.all([
          fetch("https://fakestoreapi.com/products/category/men's%20clothing"),
          fetch("https://fakestoreapi.com/products/category/women's%20clothing"),
        ]);

        const [menData, womenData] = await Promise.all([
          menRes.json(),
          womenRes.json(),
        ]);

        setMensClothing(menData);
        setWomensClothing(womenData);
      } catch (error) {
        console.error("Error fetching fashion data:", error);
      }
    };

    fetchData();
  }, []); 
  

  return (
    <>
      {/* <Navbar /> */}
      {/* <Category /> */}
      <div className="fashion-container">
        <section>
          <h2>Men's Fashion</h2>
          <div className="fashion-grid">
            {mensClothing.map((item) => (
              <div key={item.id} className="fashion-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="fashion-image"
                />
                <h4 className="fashion-title">{item.title}</h4>
                <p className="fashion-price">₹{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Women's Fashion</h2>
          <div className="fashion-grid">
            {womensClothing.map((item) => (
              <div key={item.id} className="fashion-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="fashion-image"
                />
                <h4 className="fashion-title">{item.title}</h4>
                <p className="fashion-price">₹{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FashionDetails;
