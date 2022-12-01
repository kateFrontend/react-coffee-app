import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About Us
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />/
      </Routes>
    </Router>
  );
}

export default App;
