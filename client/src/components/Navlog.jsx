import React, { Fragment, useState } from "react";
import "../Styles/Navlog.css";
import LOGO from '../Images/LOGO.png';
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import {Avatar} from '@material-ui/core';
import AvatarPic from '../Images/AvatarPic.jpg';
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { IconButton } from "@material-ui/core";
const Navbar = () => {
    const [input, setinput] = useState('')
  return (
    <Fragment>
      <nav>
        <div className="nav">
          <div className="navbar">
            <div className="header">
              <NavLink to="/" className="nav-link">
                  <img src={LOGO} alt="" className="text-logo"/>
                {/* <h1>Instagram</h1> */}
              </NavLink>
            </div>
              <div className="input">
                <input type="text" placeholder="Search" value={input} onChange={(e)=>{setinput(e.target.value)}}/>
                <button onClick={()=>{setinput('')}}>
                  <i class="far fa-times-circle"></i>
                </button>
              </div>
            <div className="icons">
              <NavLink to="/" className="nav-link">
                <IconButton>
               
                  <HomeOutlinedIcon className="icon" />
                </IconButton>
              </NavLink>
              <NavLink to="/DM" className="nav-link">
               
                <IconButton>
                  <SendOutlinedIcon className="icon" />
                </IconButton>
              </NavLink>
              <NavLink to="/Explore" className="nav-link">
               
                <IconButton>
                  <ExploreOutlinedIcon className="icon" />
                </IconButton>
              </NavLink>
              <NavLink to="/Liked" className="nav-link">
            
                <IconButton>
                  <FavoriteBorderOutlinedIcon className="icon" />
                </IconButton>
              </NavLink>
              <NavLink to="/profile" className="nav-link">
                 
                <IconButton>
                <Avatar alt="Remy Sharp" src={AvatarPic} />
                </IconButton>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <hr/>
    </Fragment>
  );
};

export default Navbar;
