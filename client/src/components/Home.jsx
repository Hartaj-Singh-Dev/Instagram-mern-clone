import {React ,useState,Fragment}from "react";
import '../Styles/Home.css'
import {Avatar} from '@material-ui/core';
const Home = () => {
  const [addCom, setaddCom] = useState('')
  const [like, setlike] = useState({
    Unicode:'far fa-heart fa-2x',
    color:'black',
    count:0
  })

  const Like = ()=>{
    let {Unicode,color,count} = like
     count += 1
    if(Unicode === 'far fa-heart fa-2x'){
      setlike({Unicode:'fas fa-heart fa-2x',color:'red',count:count})
    }else{
      let{count} = like
      count = count - 1 
     setlike({Unicode:'far fa-heart fa-2x',color:'black',count:count})
    }
  }
   return (
    <Fragment>
      <div className="homePage">
        <div className="cardPost">
          <div className="postHeader">
            <div className="avatar">
            <Avatar alt="" src="" />
            </div>
            <div className="headerName">
              <h3>Username</h3>
            </div>
          </div>
          <div className="postPic">
            <img src="https://images.unsplash.com/photo-1595867190173-8b8c50f9473b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" style={{height:"37rem",width:'100%'}}/>
          </div>
          <div className="postFoot">
            <div className="icons">
            <button style={{background:'transparent',border:'none',cursor:'pointer'}} onClick={()=>{Like()}}> 
               <i className={like.Unicode} style={{color:like.color}}></i>
           </button>
            </div>
            <div className="likes" >
            <h5>{like.count} <span>likes</span></h5>
            </div>
            <div className="postCaption">
              <p>Lorem ipsum dolor sit amet consectetu
              </p>
            </div>
            
            <div className="commentBox">
            <hr/>
              <input type="text"  placeholder='Add Comment' value={addCom} onChange={(event)=>{setaddCom(event.target.value)}}/>
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>
      <h1>vt7</h1>
    </Fragment>
  );
};

export default Home;
