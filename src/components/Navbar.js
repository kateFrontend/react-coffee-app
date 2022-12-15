import React from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav>
        <h1>CoffeeMe</h1>
        <div className="menu">
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/history"> Hystory of coffee </a>
            </li>
            <li>
              <a href="/types"> Coffee types </a>
            </li>
            <li>
              <a href="/benefits"> Coffee benefits </a>
            </li>
          </ul>
          <div className="btn">
            <a href="#">Bar</a>
          </div>
        </div>
        <FaBars />
      </nav>
    </>
  );
}

export default Navbar;
