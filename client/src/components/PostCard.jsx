import {React,useState} from 'react'
import '../Styles/PostCard.css'
import {Avatar} from '@material-ui/core';

const PostCard = (props) => {
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
              <div className="comments">
              </div>
            <hr/>
              <input type="text"  placeholder='Add Comment' value={addCom} onChange={(event)=>{setaddCom(event.target.value)}}/>
              <button onClick={()=>{setaddCom('')}}>Post</button>
            </div>
          </div>
        </div>
        </>
    )
}

export default PostCard
