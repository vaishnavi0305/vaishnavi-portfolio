import React from 'react';
import projects from '../assets/projects.json';

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-50 text-gray-800 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center border-b-2 inline-block border-blue-500">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="mb-2 text-gray-700">{project.description}</p>
              <p className="text-sm text-gray-500"><strong>Tech:</strong> {project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

