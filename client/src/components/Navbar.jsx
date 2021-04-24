import React from "react";
import '../Styles/Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
        <nav className="full-nav">
            <div className="nav-header">
                <div className="home">
            <NavLink className=" navLink" to="/">
                <h2 className="navlinks">
              <a> Hartaj Singh</a>
               </h2>
              </NavLink>
              </div>
              <div className="links">
              <NavLink className=" navLink" to="/signup">
              <h2 className="navlinks"> <a>SignUp</a></h2>
              </NavLink>
              <NavLink className=" navLink" to="/signin">
               <h2 className="navlinks"><a>SignIn</a> </h2>
              </NavLink>
              </div>
            </div>
        </nav>
    </React.Fragment>
  );
};

export default Navbar;
