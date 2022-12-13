import React from 'react'
import { Link } from 'react-router-dom'

function Sections() {
  return (
    <div className="serv-section">
    <h1 className="about-title">Sections to explore</h1>
    <section className="el-section">
        <div className="element">
            <Link to="/history">
                <h3 className="el-title">History</h3>
            </Link>
        </div>

        <div className="element">
            <Link to="/types">
                <h3 className="el-title">Coffee types</h3>
            </Link>
        </div>

        <div className="element">
            <Link to="/benefits">
                <h3 className="el-title">Benefits</h3>
            </Link>
        </div>
    </section>
</div>
  )
}

export default Sections