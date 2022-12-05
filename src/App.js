import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Types from "./Types";
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
        <Link to="/types" className="link">
          Coffee types
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/types" element={<Types />} />
        <Route path="/contact" element={<Contact />} />/
      </Routes>
    </Router>
  );
}

export default App;
