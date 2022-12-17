import React from "react";
import Counter from "../components/Counter";
import Hero from "../components/Hero";

import Sections from "../components/Sections";


function Home() {
  return (
    <div>
       <Hero/>
       <Counter/>
      <Sections/> 
    </div>
  );
}

export default Home;
