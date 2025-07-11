import React from 'react';

const Header = () => (
  <header className="w-full bg-black bg-opacity-90 text-white py-4">
    <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
      <div className="text-2xl font-bold">Logo</div>
      <nav>
        <ul className="flex space-x-8">
          <li><a href="#services" className="hover:text-purple-400">Services</a></li>
          <li><a href="#work" className="hover:text-purple-400">Work</a></li>
          <li><a href="#about" className="hover:text-purple-400">About</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header; 