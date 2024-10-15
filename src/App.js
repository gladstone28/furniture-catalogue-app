// src/App.js
import React, { useState } from 'react';
import FurnitureCard from './components/FurnitureCard';
import CategoryFilter from './components/CategoryFilter';
import './styles/App.css'; // Import main app styles
import furnitureData from './data/furnitureData'; // Import mock data

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
      <h1>SpreadEagles Furniture Catalogue</h1>
      <CategoryFilter onFilter={filterFurniture} />
      <div className="furniture-grid">
        {filteredFurniture.map(furniture => (
          <FurnitureCard key={furniture.id} furniture={furniture} />
        ))}
      </div>
    </div>
  );
};

export default App;
