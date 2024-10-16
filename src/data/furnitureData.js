// src/data/furnitureData.js
const furnitureData = [
  {
    id: 1,
    name: 'Sofa Set',
    category: 'Living Room',
    image: `${process.env.PUBLIC_URL}/images/sofa.jpg`,
    price: '$500',
    testimonial: 'Super comfortable and stylish!',
  },
  {
    id: 2,
    name: 'Dining Table',
    category: 'Dining Room',
    image: `${process.env.PUBLIC_URL}/images/dining_table.jpg`,
    price: '$700',
    testimonial: 'Perfect for family dinners.',
  },
  {
    id: 3,
    name: 'Office Chair',
    category: 'Office',
    image: `${process.env.PUBLIC_URL}/images/office_chair.jpg`,
    price: '$120',
    testimonial: 'Great for long hours of work.',
  },
  {
    id: 4,
    name: 'Kitchen Island',
    category: 'Kitchen',
    image: `${process.env.PUBLIC_URL}/images/kitchen_island.jpg`,
    price: '$900',
    testimonial: 'The perfect addition for extra kitchen workspace!',
  },
  {
    id: 5,
    name: 'Bar Stools',
    category: 'Kitchen',
    image: `${process.env.PUBLIC_URL}/images/bar_stools.jpg`,
    price: '$200',
    testimonial: 'Stylish and comfortable for the kitchen counter.',
  },
  // New Novelty Products category items
  {
    id: 6,
    name: 'Funky Chair',
    category: 'Novelty Products',
    image: `${process.env.PUBLIC_URL}/images/funky_chair.jpg`,  // Path to funky chair image
    price: '$150',
    testimonial: 'Bright and fun for any room!',
  },
  {
    id: 7,
    name: 'Quirky Lamp',
    category: 'Novelty Products',
    image: `${process.env.PUBLIC_URL}/images/quirky_lamp.jpg`,  // Path to quirky lamp image
    price: '$75',
    testimonial: 'Add a touch of whimsy to your lighting.',
  }
];

export default furnitureData;
