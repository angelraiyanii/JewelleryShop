import React from "react";
import "../App.css";
import c1 from "./Images/category1.png";
import c2 from "./Images/chains.png";
import c3 from "./Images/bracelet.png";
import c4 from "./Images/category2.png";
import c5 from "./Images/category.png";

const Category = () => {
  return (
    <>
      <h3 className="p-3 text-center">Category Show</h3>
      <div className="category-container">
        {[  
          { img: c1, title: "Finger Ring" },  
          { img: c2, title: "Chains" },  
          { img: c3, title: "Bracelet" },  
          { img: c4, title: "Earrings" },  
          { img: c5, title: "Bangles" }  
        ].map((item, index) => (
          <div key={index} className="card-custom">
            <img src={item.img} alt={item.title} className="card-image" />
            <div className="card-content">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-subtitle">
                Show <span className="arrow">➤</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
