import React from "react";
import { Link } from "react-router-dom";
import "../css/Sections.css";

function Sections() {
  return (
    <section className="serv-section">
      <h1 className="serv-title">Sections to explore</h1>

      <section className="el-section">
        <Link to="/history">
          <div className="element one">
            <h3 className="el-title">
              History <br /> of coffee
            </h3>
          </div>
        </Link>

        <Link to="/types">
          <div className="element two">
            <h3 className="el-title">
              Coffee <br /> types
            </h3>
          </div>
        </Link>

        <Link to="/benefits">
          <div className="element three">
            <h3 className="el-title">
              Coffee <br /> benefits
            </h3>
          </div>
        </Link>
      </section>
    </section>
  );
}

export default Sections;
