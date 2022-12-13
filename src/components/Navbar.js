import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <Link to="/" className="link">
      Home
    </Link>
    <Link to="/history" className="link">
      History of coffee
    </Link>
    <Link to="/types" className="link">
      Coffee types
    </Link>
    <Link to="/benefits" className="link">
      Coffee benefits
    </Link>
  </nav> 
  )
}

export default Navbar