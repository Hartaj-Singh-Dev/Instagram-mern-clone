import React from "react";
import "../Styles/Profile.css";
import Pic from "../Images/AvatarPic.jpg";

const Profile = () => {
  return (
    <React.Fragment>
      <div
        className="profileDiv"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          className="User"
          style={{ display: "flex", width: "67vw", height: "15rem",padding:'0.8rem' }}
        >
          <div className="usePic" style={{height:'14rem',width:'17rem'}}>
            <img
              src={Pic}
              alt=""
              className="userPic"
              style={{ height: "11rem", width: "11rem", borderRadius: "50%" }}
            />
          </div>
          <div className="userData" style={{width:'19rem'}}>
            <h1><span style={{fontWeight:'300'}}>Hartaj Singh</span></h1>
            <div
              className="follow"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width:'19rem'
              }}
            >
              <h3 style={{fontWeight:'400'}}>
                40
                <span
                  className="follow-header"
                  style={{ fontSize: "1rem", fontWeight: "500" ,marginLeft:'4px'}}
                >
                  posts
                </span>
              </h3>
              <h3 style={{fontWeight:'400'}}>
                1m
                <span
                  className="follow-header"
                  style={{ fontSize: "1rem", fontWeight: "500" ,marginLeft:'4px'}}
                >
                  followers
                </span>
              </h3>
              <h3 style={{fontWeight:'400'}}>
                55{" "}
                <span
                  className="follow-header"
                  style={{ fontSize: "1rem", fontWeight: "500" , marginLeft:'4px' }}
                >
                  following
                </span>
              </h3>
            </div>
            <h5 style={{marginTop:'-0.5rem',color:'gray'}}>Genius</h5>
          </div>
        </div>
        <div className="gallary" style={{width:'70vw', display:'grid',marginTop:'1rem'}}>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" style={{height:'19rem',width:'19rem'}}/>
        </div>
      </div>

     
    </React.Fragment>
  );
};

export default Profile;
