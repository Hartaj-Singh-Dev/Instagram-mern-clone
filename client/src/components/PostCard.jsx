import {React,useState} from 'react'
import '../Styles/PostCard.css'
import {Avatar} from '@material-ui/core';

const PostCard = (props) => {
 const postId =  props.postId
 const [Likes, setLikes] = useState(0)
 const [AddCom, setAddCom] = useState('')
    const [addCom, setaddCom] = useState('')
    const [like, setlike] = useState({
      Unicode:'far fa-heart fa-2x',
      color:'black',
      count:Likes
    })
  
    const Like = (props)=>{
      let {Unicode,color,count} = like
       count += 1
      if(Unicode === 'far fa-heart fa-2x'){  
       fetch("http://localhost:8000/like",{
          credentials:'include',
          method:"PUT",
          headers:{
            "Content-type":'application/json'
          },
          body:JSON.stringify({postId:postId})
        }).then(function(res){return res.json()}).then((data)=>{setLikes(data.Like.length)
          console.log(data);}).catch((err)=>{console.log(err);})
          setlike({Unicode:'fas fa-heart fa-2x',color:'red',count:count})
        
      }else{
        let{count} = like
        count = count - 1     
        fetch("http://localhost:8000/dislike",{
          credentials:'include',
          method:"PUT",
          headers:{
            "Content-type":'application/json'
          },
          body:JSON.stringify({postId:postId})
        }).then(function(res){return res.json()}).then((data)=>{setLikes(data.Like.length)
        console.log(data);
        }).catch((err)=>{console.log(err);})
        setlike({Unicode:'far fa-heart fa-2x',color:'black',count:count})
       
      }
    }
    const makeComment = ()=>{
      setAddCom(addCom)
      console.log(addCom);
      console.log(AddCom);
      // fetch('http://localhost:8000/comment',{
      //   method:"PUT",
      //   credentials:'include',
      //   headers:{
      //     "Content-type":"application/json"
      //   },
      //   body:JSON.stringify({text:AddCom,postID:postId})
      // })
      setaddCom('')
      setAddCom('')
    }


    return (
        <>
        <div className="cardPost">
          <div className="postHeader">
            <div className="avatar">
            <Avatar alt="" src={props.avatarSrc} style={{height:'2rem',width:'2rem'}} />
            </div>
            <div className="headerName">
              <h3>{props.userName}</h3>
            </div>
          </div>
          <div className="postPic">
            <img src={props.imageUrl} alt="" style={{height:"33rem",width:'100%'}}  loading='lazy'/>
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
              <p>{props.postCaption}
              </p>
            </div>
            
            <div className="commentBox">
              <div className="comments">{AddCom}
              </div>
            <hr/>
            <form>
              <input type="text"  placeholder='Add Comment' value={addCom} onChange={(event)=>{setaddCom(event.target.value)}}/>
              <button onClick={()=>{makeComment()}}>Post</button>
            </form>
            </div>
          </div>
        </div>
        </>
    )
}

export default PostCard
