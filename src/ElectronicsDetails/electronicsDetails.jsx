import React, { useEffect, useState } from "react";
import "./electronicsDetails.css";
import Navbar from "../Dashboard/navbar";
import Category from "../Category/category";

const ElectronicsDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/electronics");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <>    
    <Navbar/>
    <Category/>
    <div className="electronics-list">
      <h2>Electronics Products</h2>
      <div className="electronics-grid">
        {products.map((product) => (
          <div key={product.id} className="electronics-item">
            <img src={product.image} alt={product.title} className="electronics-img" />
            <h4>{product.title}</h4>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.rating.rate} ⭐</p>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default ElectronicsDetails;
