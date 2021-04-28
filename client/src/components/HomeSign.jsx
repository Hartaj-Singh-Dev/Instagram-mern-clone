import React from "react";
import LOGO from "../Images/LOGO.png";
import "../Styles/HomeSign.css";
import { NavLink } from "react-router-dom";

const HomeSign = () => {
  return (
    <React.Fragment>
      <div className="centerDiv">
        <div className="Div">
          <div className="logo">
            <img src={LOGO} alt="" className="logo" />
          </div>
          <div className="divider">
            <hr />
          </div>
          <div className="Links">
           <button type="submit" className="signIn">
              <NavLink to="/signin"><a className='signin-link'>SignIn</a></NavLink>
            </button>
            <button type='submit' className="signUp">
              <NavLink to="/signup" ><a className='signup-link'>SignUp</a></NavLink>
            </button >
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeSign;
