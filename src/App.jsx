import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
