import React, { useState } from "react";
import LOGO from "../Images/LOGO.png";
import { NavLink, useHistory } from "react-router-dom";
import "../Styles/SignUp.css";

const SignUp = () => {
  const history = useHistory()
  const [error, seterror] = useState()
  const [userData, setuserData] = useState({
    name:'',
    email:'',
    phone:'',
    password:'',
  })
  
   const SignUpData =(event)=>{
     const name = event.target.name
     const data = event.target.value

     setuserData({...userData ,[name]:data})
   }  
  const signUpForm = async (event) => {
    event.preventDefault();

    const { name,email,phone,password} = userData
    userData.phone = parseInt(phone)

    const res = await fetch("http://localhost:8000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,phone,password})
    })
    const data = await res.json()
    if(!data || res.status === 404){
      seterror(data.Error)
      console.log(data.Error);
    }else{
      seterror('')
      history.push("/signin")
    }


  }
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
            <form className="Signup-form" method="POST">
              <h1>SignUp</h1>
              <div className="formInput">
                <i class="fas fa-user-tie  fa-lg"></i>
                <input type="text" name="name" placeholder="name"  value={userData.name} onChange={(event)=>{SignUpData(event)}} />
              </div>
              <div className="formInput">
                <i class="fas fa-envelope  fa-lg"></i>
                <input type="text" name="email" placeholder="email"  value={userData.email}  onChange={(event)=>{SignUpData(event)}}/>
              </div>
              <div className="formInput">
                <i class="fas fa-phone fa-lg"></i>
                <input type="number" name="phone" placeholder="phone"  value={userData.phone}  onChange={(event)=>{SignUpData(event)}}/>
              </div>
              <div className="formInput">
                <i class="fas fa-lock fa-lg"></i>
                <input type="password" name="password" placeholder="password"  value={userData.password}  onChange={(event)=>{SignUpData(event)}}/>
              </div>
              <button type='submit' className='SignUp-button' onClick= {(event) => {signUpForm(event)}}>
                SignUp
              </button>
            </form>
            <h6 className='ServerError'>{error}</h6>
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
