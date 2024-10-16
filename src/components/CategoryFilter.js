// src/components/CategoryFilter.js
import React from 'react';
import '../styles/CategoryFilter.css';  // Make sure the path is correct

const categories = ['All', 'Living Room', 'Dining Room', 'Office', 'Kitchen', 'Novelty Products'];  // Added 'Novelty Products'

const CategoryFilter = ({ onFilter }) => {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button 
          key={category} 
          onClick={() => onFilter(category)} 
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
