import React, { useEffect, useState } from 'react';
import './FashionDetails.css'; 

const FashionDetails = () => {
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menRes, womenRes] = await Promise.all([
          fetch("https://fakestoreapi.com/products/category/men's%20clothing"),
          fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        ]);

        const [menData, womenData] = await Promise.all([
          menRes.json(),
          womenRes.json()
        ]);

        setMensClothing(menData);
        setWomensClothing(womenData);
      } catch (error) {
        console.error('Error fetching fashion data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="loading-text">Loading fashion items...</p>;

  return (
    <div className="fashion-container">
      <section className="fashion-section">
        <h2>Men's Fashion</h2>
        <div className="fashion-grid">
          {mensClothing.map(item => (
            <div key={item.id} className="fashion-card">
              <img src={item.image} alt={item.title} className="fashion-image" />
              <h4 className="fashion-title">{item.title}</h4>
              <p className="fashion-price">₹{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fashion-section">
        <h2>Women's Fashion</h2>
        <div className="fashion-grid">
          {womensClothing.map(item => (
            <div key={item.id} className="fashion-card">
              <img src={item.image} alt={item.title} className="fashion-image" />
              <h4 className="fashion-title">{item.title}</h4>
              <p className="fashion-price">₹{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FashionDetails;
