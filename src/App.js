// src/App.js
import React, { useState } from 'react';
import FurnitureCard from './components/FurnitureCard';
import CategoryFilter from './components/CategoryFilter';
import Footer from './components/Footer';  // Import Footer
import './styles/App.css'; 
import furnitureData from './data/furnitureData';

const App = () => {
  const [category, setCategory] = useState('All');

  const filterFurniture = (category) => {
    setCategory(category);
  };

  const filteredFurniture = category === 'All' 
    ? furnitureData 
    : furnitureData.filter(item => item.category === category);

  return (
    <div className="app-container">
      <h1>Spread Eagles Furniture Catalogue</h1>
      <CategoryFilter onFilter={filterFurniture} />
      <div className="furniture-grid">
        {filteredFurniture.map(furniture => (
          <FurnitureCard key={furniture.id} furniture={furniture} />
        ))}
      </div>
      
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;
