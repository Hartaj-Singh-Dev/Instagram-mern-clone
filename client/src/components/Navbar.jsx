import React from "react";
import '../Styles/Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
        <nav className="full-nav">
            <div className="nav-header">
                <div className="home">
            <NavLink className="navLink" to="/">
               <h1 className='navlinks'>Hartaj Singh</h1>
              </NavLink>
              </div>
              <div className="links">
              <NavLink className="navLink" to="/signup">
               <h1 className='navlinks'>SignUp</h1>
              </NavLink>
              <NavLink className="navLink" to="/signin">
                <h1 className='navlinks'>SignIn</h1>
              </NavLink>
              </div>
            </div>
        </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light  Signnav">
          <div className="C">
        <NavLink className="navbar-brand" to="/">
          Hartaj Singh
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
               SignUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin">
                SignIn
              </NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav> */}
    </React.Fragment>
  );
};

export default Navbar;
