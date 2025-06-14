import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-2 inline-block border-blue-500">
          Resume
        </h2>

        {/* Download Button */}
        <a
          href="/Vaishnavi_Buradkar_Resume01.pdf"
          download
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block mb-6"
        >
          Download Resume
        </a>

        {/* PDF Preview */}
        <div className="overflow-hidden border rounded-lg shadow-lg">
          <iframe
            title="Resume Preview"
            src="/Vaishnavi_Buradkar_Resume01.pdf"
            className="w-full h-[750px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Resume;
