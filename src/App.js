// App.js
import React, { useState } from 'react';
import FurnitureCard from './components/FurnitureCard';
import CategoryFilter from './components/CategoryFilter';
import './App.css'; // for styling

const furnitureData = [
  {
    id: 1,
    name: 'Sofa Set',
    category: 'Living Room',
    image: '/images/sofa.jpg',
    price: '$500',
    testimonial: 'Super comfortable and stylish!',
  },
  {
    id: 2,
    name: 'Dining Table',
    category: 'Dining Room',
    image: '/images/dining_table.jpg',
    price: '$700',
    testimonial: 'Perfect for family dinners.',
  },
  {
    id: 3,
    name: 'Office Chair',
    category: 'Office',
    image: '/images/office_chair.jpg',
    price: '$120',
    testimonial: 'Great for long hours of work.',
  },
  // Add more furniture data...
];

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
      <h1>Furniture Catalogue</h1>
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
