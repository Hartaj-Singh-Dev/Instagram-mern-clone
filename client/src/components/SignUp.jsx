import React from "react";
import LOGO from "../Images/LOGO.png";
import { NavLink } from "react-router-dom";
import "../Styles/SignUp.css";

const SignUp = () => {
  const signUpForm = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="centerSignUpDiv">
        <div className="Div">
          <div className="logo">
            <img src={LOGO} alt="" className="logo" />
          </div>
          <div className="divider">
            <hr />
          </div>
          <div className="form">
            <form className="Signup-form">
              <h1>SignUp</h1>
              <div className="formInput">
                <i class="fas fa-user-tie  fa-lg"></i>
                <input type="text" name="Name" placeholder="Name" />
              </div>
              <div className="formInput">
                <i class="fas fa-envelope  fa-lg"></i>
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="formInput">
                <i class="fas fa-phone fa-lg"></i>
                <input type="number" name="phone" placeholder="Phone" />
              </div>
              <div className="formInput">
                <i class="fas fa-lock fa-lg"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <button type='submit' className='SignUp-button' onClick= {(event) => {signUpForm(event)}}>
                SignUp
              </button>
            </form>
            <div className='sigin-link'>
            <NavLink to="/signin">
              <a>Alerady have Account?</a>
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
