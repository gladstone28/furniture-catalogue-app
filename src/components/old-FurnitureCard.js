// FurnitureCard.js
import React from 'react';
import './FurnitureCard.css'; // for card styling

const FurnitureCard = ({ furniture }) => {
  return (
    <div className="furniture-card">
      
      <img src={`${process.env.PUBLIC_URL}/images/sofa.jpg`} alt="Sofa" />

      <div className="furniture-info">
        <h2>{furniture.name}</h2>
        <p>Price: {furniture.price}</p>
        <blockquote>"{furniture.testimonial}"</blockquote>
      </div>
    </div>
  );
};

export default FurnitureCard;
