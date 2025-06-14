import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-2 inline-block border-blue-500">
          Contact
        </h2>

        <p className="text-lg mb-6">Feel free to reach out to me via email or the form below!</p>

        {/* Contact Info */}
        <p className="mb-4 text-gray-700">
          📧 Email: <a href="mailto:vaishnaviburadkar@gmail.com" className="text-blue-600 underline">vaishnaviburadkar@gmail.com</a>
        </p>
        <p className="mb-8 text-gray-700">
          📍 Location: Pune, India
        </p>

        {/* Simple mailto form */}
        <form
          action="mailto:vaishnaviburadkar@gmail.com"
          method="POST"
          encType="text/plain"
          className="grid gap-4 w-full max-w-md mx-auto px-4 sm:px-0"
        >
          <input type="text" name="Name" placeholder="Your Name" className="p-2 border rounded" required />
          <input type="email" name="Email" placeholder="Your Email" className="p-2 border rounded" required />
          <textarea name="Message" placeholder="Your Message" rows="4" className="p-2 border rounded" required></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
