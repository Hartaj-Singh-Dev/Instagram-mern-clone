import { React ,useEffect,useLayoutEffect,useState} from "react";
import "../Styles/Profile.css";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Pic from "../Images/AvatarPic.jpg";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [MypostPic, setMypostPic] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const getmyPosts = ()=>{
    fetch("http://localhost:8000/myPost",{
      method:"GET",
      headers:{
        "Content-type":'application/json'
      },
      credentials:'include'
    }).then(function(res){
      return res.json()
    }).then(function(data){
     setMypostPic(data.Myposts)
      console.log(data.Myposts);
    }).catch((err)=>{console.log(err);})
  }

  useEffect(() => {
   getmyPosts()
  }, [])

  return (
    <>
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
          style={{
            display: "flex",
            width: "67vw",
            height: "15rem",
            padding: "0.8rem",
          }}
        >
          <div className="usePic" style={{ height: "14rem", width: "17rem" }}>
            <img
              src={Pic}
              alt=""
              className="userPic"
              style={{ height: "11rem", width: "11rem", borderRadius: "50%" }}
            />
          </div>
          <div className="userData" style={{ width: "19rem" }}>
            <h1>
              <span style={{ fontWeight: "300" }}>Hartaj Singh</span>
            </h1>
            <div
              className="follow"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "19rem",
              }}
            >
              <h3 style={{ fontWeight: "400" }}>
                40
                <span
                  className="follow-header"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    marginLeft: "4px",
                  }}
                >
                  posts
                </span>
              </h3>
              <h3 style={{ fontWeight: "400" }}>
                1m
                <span
                  className="follow-header"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    marginLeft: "4px",
                  }}
                >
                  followers
                </span>
              </h3>
              <h3 style={{ fontWeight: "400" }}>
                55{" "}
                <span
                  className="follow-header"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    marginLeft: "4px",
                  }}
                >
                  following
                </span>
              </h3>
            </div>
            <h5 style={{ marginTop: "-0.5rem", color: "gray" }}>Genius</h5>
          </div>
          <div className="Postbutton">
            <NavLink to="/createPost">
              <button className="postButton">CreatePost</button>
            </NavLink>
          </div>
          {/* DropDown */}
          <div className="dropDown" style={{marginTop:'1rem'}}>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
          <i class="fas fa-ellipsis-v"></i>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink to='/logout'>Logout</NavLink></MenuItem>

      </Menu>
      {/* DropDown */}
      </div>
        </div>
        <div
          className="gallary"
          style={{ width: "70vw", display: "grid", marginTop: "1rem" }}
        >
          {MypostPic.map(link=>{
            return(
              <img
              key={link._id}
            src={link.photo}
            alt=""
            style={{ height: "19rem", width: "19rem" }}
          />
            )
          })}
        
        </div>
      </div>
    </>
  );
};

export default Profile;
