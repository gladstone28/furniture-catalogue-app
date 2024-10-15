// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';  // Import CSS for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Spread Eagles Furniture Catalogue. All rights reserved.</p>
      <p>Designed with ❤️ by Gladstone rose(Quality Solutions Limited)</p>
    </footer>
  );
};

export default Footer;
