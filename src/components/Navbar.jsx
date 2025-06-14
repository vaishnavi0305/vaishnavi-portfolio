import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600 cursor-pointer" onClick={() => scrollTo('header')}>
          Vaishnavi
        </span>
        <div className="space-x-4 text-sm text-gray-800 font-semibold">
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('portfolio')}>Portfolio</button>
          <button onClick={() => scrollTo('resume')}>Resume</button>
          <button onClick={() => scrollTo('blog')}>Blog</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

