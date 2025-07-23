import React from "react";
import { useNavigate } from "react-router-dom";
import "./category.css";

const Category = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Mobiles", img: "https://img.icons8.com/color/96/iphone.png", route: "/mobileDetails" },
    { name: "Electronics", img: "https://img.icons8.com/color/96/laptop.png", route: "/electronics" },
    { name: "Fashion", img: "https://img.icons8.com/color/96/t-shirt.png", route: "/" },
    { name: "Food", img: "https://img.icons8.com/color/96/hamburger.png", route: "/" },
    { name: "Toys", img: "https://img.icons8.com/color/96/teddy-bear.png", route: "/" }
  ];

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  return (
    <div className="category-container">
      {categories.map((cat, index) => (
        <div
          className="category-card"
          key={index}
          onClick={() => handleCategoryClick(cat.route)}
          style={{ cursor: "pointer" }}
        >
          <img src={cat.img} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
