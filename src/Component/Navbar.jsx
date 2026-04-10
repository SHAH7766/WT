import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header className="header">
       <nav className="navbar">
           <div className="container">
                <h1 className="logo lg-heading text-light">WT</h1>
                <ul className="nav-items">
                   <li className="nav-item"><Link to="/">Home</Link></li>
                   <li className="nav-item"><Link to="/about">About</Link></li>
                   <li className="nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
           </div>
       </nav>
        <div className="header-content">
            <h1 className="lg-heading text-light main-heading">travel the world</h1>
            <p className="text-light">travel the world, experience the greateness, it's the best gift given by nature</p>
            <a href="#" className="btn btn-primary text-red md-heading">Explore Places</a>
        </div>
    </header>
    </div>
  )
}

export default Navbar
