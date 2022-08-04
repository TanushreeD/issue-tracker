import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white" to='/'><i class="fa-solid fa-chart-column"></i> TRAC</NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        
        <li class="nav-item">
          <NavLink className="nav-link active text-white" to="/signUp">Sign Up</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active text-white" to="/addissue"
            >Create issue</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header