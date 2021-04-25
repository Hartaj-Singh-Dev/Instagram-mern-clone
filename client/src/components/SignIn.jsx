import React, { useState ,useContext } from "react";
import LOGO from "../Images/LOGO.png";
import {userContext} from '../App';
import { NavLink, useHistory } from "react-router-dom";
import "../Styles/SignIn.css";

const SignIn = () => {
  const history = useHistory();
  const [ServerError, setServerError] = useState()
  const {state,dispatch} = useContext(userContext)
  const [SignIndata, setSignIndata] = useState({
    email:"",
    password:""
  })
  const Signindata = (event)=>{
    const name = event.target.name
    const data = event.target.value

    setSignIndata({...SignIndata,[name]:data})
  }

  const signInForm = async (event) => {
    event.preventDefault();
    const {email,password} = SignIndata

    const res = await fetch('http://localhost:8000/signin',{
      mode:"cors",
      method:'POST',
      credentials:'include',
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Origin:'http://localhost:3000'
      },
      body:JSON.stringify({email,password})
    })
    const data = await res.json()
     if(!data || res.status === 404){
      setServerError(data.Error)
      console.log(data.Error);
    }else{
      setServerError('')
      dispatch({type:"USER",payload:true})
      history.push("/profile")
    }
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
            <form className="SignIn-form" method='POST'>
              <h1>SignIn</h1>
              <div className="formInput">
                <i class="fas fa-envelope  fa-lg"></i>
                <input type="text" name="email" placeholder="Email" onChange={(event)=>{Signindata(event)}}/>
              </div>
              <div className="formInput">
                <i class="fas fa-lock fa-lg"></i>
                <input type="password" name="password" placeholder="Password" onChange={(event)=>{Signindata(event)}}/>
              </div>
              <button
                type="submit"
                className="SignIn-button"
                onClick={(event) => {
                  signInForm(event);
                }}
              >
                SignIn
              </button>
              <h6>{ServerError}</h6>
            </form>
            <div className="sigup-link">
              <NavLink to="/signup">
                <a>Not have account?</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
