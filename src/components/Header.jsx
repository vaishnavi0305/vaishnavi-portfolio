import React from 'react';
import profilePic from '../assets/VaishnaviBuradkarPassportPhoto.jpg';

const Header = () => {
  return (
    <header id="header" className="bg-gray-900 text-white py-10 text-center">
      <img
        src={profilePic}
        alt="Vaishnavi Buradkar"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
      />
      <h1 className="text-4xl font-bold">Vaishnavi Nitin Buradkar</h1>
      <p className="text-xl mt-2">Cloud Engineer</p>
      <p className="text-gray-300 mt-1">📧 vaishnaviburadkar@gmail.com | 📍 Pune, India</p>
    </header>
  );
};

export default Header;

