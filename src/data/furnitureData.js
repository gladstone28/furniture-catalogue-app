// src/data/furnitureData.js
const furnitureData = [
  {
    id: 1,
    name: 'Sofa Set',
    category: 'Living Room',
    image: `${process.env.PUBLIC_URL}/images/sofa.jpg`, // Sofa image path
    price: '$500',
    testimonial: 'Super comfortable and stylish!',
  },
  {
    id: 2,
    name: 'Dining Table',
    category: 'Dining Room',
    image: `${process.env.PUBLIC_URL}/images/dining_table.jpg`, // Dining table image path
    price: '$700',
    testimonial: 'Perfect for family dinners.',
  },
  {
    id: 3,
    name: 'Office Chair',
    category: 'Office',
    image: `${process.env.PUBLIC_URL}/images/office_chair.jpg`, // Office chair image path
    price: '$120',
    testimonial: 'Great for long hours of work.',
  },
  // Add more furniture items here as needed
];

export default furnitureData;
