import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "./useContext"

const Header = () => {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn, currentUser } = useContext(UserContext);
  const logout = () => {
    sessionStorage.removeItem("user")
    setLoggedIn(false)
    navigate('/login1');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">
            Issue Tracker
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <NavLink className="nav-link active text-white" to="/addissue">
                  Issue Form
                </NavLink>
              </li>
            {!loggedIn ? (
              <li class="nav-item">
                <NavLink className="nav-link active text-white" to="/login1">
                  Login
                </NavLink>
              </li>
              )
              :
              <button className="btn btn-danger" onClick={logout}>Logout</button>
}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
