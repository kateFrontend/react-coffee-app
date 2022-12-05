import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Types from "./pages/Types";
import Benefits from "./pages/Benefits"
import Contact from "./pages/Contact";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/types" className="link">
          Coffee types
        </Link>
        <Link to="/benefits" className="link">
          Coffee benefits
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/types" element={<Types />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contact" element={<Contact />} />/
      </Routes>
    </Router>
  );
}

export default App;
