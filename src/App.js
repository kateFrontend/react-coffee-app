import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Types from "./pages/Types";
import Benefits from "./pages/Benefits";
import History from "./pages/History";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />/
          <Route path="/types" element={<Types />} />
          <Route path="/benefits" element={<Benefits />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
