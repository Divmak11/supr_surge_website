import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white py-8 text-center">
    <div className="container mx-auto">
      <p>&copy; {new Date().getFullYear()} CreativeFuel. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer; 