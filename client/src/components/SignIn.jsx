import React from 'react'
import LOGO from "../Images/LOGO.png";
import { NavLink } from "react-router-dom";
import "../Styles/SignIn.css";

const SignIn = () => {
    const signInForm = (event) => {
        event.preventDefault();
      };
    return (
        <React.Fragment>
           <div className="centerSignInDiv">
        <div className="SignInDiv">
          <div className="logo">
            <img src={LOGO} alt="" className="logo" />
          </div>
          <div className="divider">
            <hr />
          </div>
          <div className="form">
            <form className="SignIn-form">
              <h1>SignIn</h1>
              <div className="formInput">
                <i class="fas fa-envelope  fa-lg"></i>
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="formInput">
                <i class="fas fa-lock fa-lg"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <button type='submit' className='SignIn-button' onClick= {(event) => {signInForm(event)}}>
                SignIn
              </button>
            </form>
            <div className='sigup-link'>
            <NavLink to="/signup">
              <a>Not have account?</a>
            </NavLink>
            </div>
          </div>
        </div>
      </div>
        </React.Fragment>
    )
}

export default SignIn
