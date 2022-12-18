import React from "react";
import Counter from "../components/Counter";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import Slider from "../components/Slider";


function Home() {
  return (
    <div>
       <Hero/>
       <Counter/>
      <Sections/>
      <Slider/> 
    </div>
  );
}

export default Home;
