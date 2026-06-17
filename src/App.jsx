import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Navbar from "./../Components/Navbar.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx"
import Skills from "../Pages/Skills.jsx";
import Projects from "../Pages/Projects.jsx";
import Contact from "../Pages/Contact.jsx";
import ScrollToTop from './../Components/ScrollToTop.jsx';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="content-container">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/test" element={<h1 style={{color: 'red', padding: '100px'}}>Router Is Working!</h1>} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
