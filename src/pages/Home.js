import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sections/>
    </div>
  );
}

export default Home;
