import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Name */}
        <span
          className="text-xl font-bold text-blue-600 cursor-pointer"
          onClick={() => scrollTo('header')}
        >
          Vaishnavi Buradkar
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-sm">
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('portfolio')}>Portfolio</button>
          <button onClick={() => scrollTo('resume')}>Resume</button>
          <button onClick={() => scrollTo('blog')}>Blog</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-2 px-4 space-y-2 text-sm font-medium text-gray-700">
          <button className="block w-full text-left" onClick={() => scrollTo('about')}>About</button>
          <button className="block w-full text-left" onClick={() => scrollTo('portfolio')}>Portfolio</button>
          <button className="block w-full text-left" onClick={() => scrollTo('resume')}>Resume</button>
          <button className="block w-full text-left" onClick={() => scrollTo('blog')}>Blog</button>
          <button className="block w-full text-left" onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


