import React, { useState } from "react";
import "../Styles/CreatePost.css";
import {useHistory} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';

const CreatePost = () => {
  const history = useHistory()
  const [PostImage, setPostimage] = useState();
  const [Post, setPost] = useState({
    Postcaption:'',
    Postimage:PostImage,
  })
    const [imagePreview, setimagePreview] = useState();
    const [previewError, setpreviewError] = useState();


  
    const handleFile = (e)=>{
        const image = e.target.files[0]
        const imageTypes = ["image/png","image/jpg","image/jpeg",'image/PNG']
        if(image && imageTypes.includes(image.type)){
            let imageRead = new FileReader()
            imageRead.onloadend= ()=>{
                setimagePreview(imageRead.result)
                setPostimage(imageRead.result)
                setpreviewError('')
            }
            imageRead.readAsDataURL(image)
            console.log(" Image Selected");
        }else{
            setpreviewError('Sorry Image type unspported')
        }
    }

    const sendcaption = (event)=>{
      const name = event.target.name
      const value = event.target.value
      
      setPost({...Post , [name]:value})
    }

    const postdetails= async(e)=>{
      let imageurl;
      const {Postcaption,Postimage} = Post
      const data = new FormData()
      data.append('file',PostImage)
      data.append('upload_preset','Instagram-clone') 
      data.append('cloud_name','Hartaj')

      const res = await fetch('https://api.cloudinary.com/v1_1/hartaj/image/upload',{
        method:'POST',
        body:data
      })
      const Resdata = await res.json()
      if(res.status == 200 && Resdata){
        console.log(Resdata.url);
        imageurl = Resdata.url
        console.log(imageurl);
      }


     const ServerRes = await fetch("http://localhost:8000/createPost",
      {
        credentials:'include',
        method:'POST',
        headers:{
          "Content-type":'application/json'
        },
        body:JSON.stringify({body:Postcaption,pic:imageurl})
      })
      const ServerPost =  await ServerRes.json()
      if(ServerRes.status === 200 && ServerPost){
        window.alert("Post Created")
        history.push('/')
      }
    }


  return (
    <>
      <div className="createpostFull">
        <div className="centerCreatePost">
            <h1 style={{fontWeight:'400'}}>Create Post</h1>
            <div className="caption" style={{marginBottom:'1rem'}}>
                <textarea name="Postcaption" id="" cols="40" rows="5" placeholder="Add Caption" value={Post.Postcaption} onChange={(event)=>{sendcaption(event)}}></textarea>
            </div>
          <div class="file">
            <input  type="file" name="file" id="file" class="inputfile" accept="image/*" onChange={(e)=>{handleFile(e)}} />
            <label for="file"><strong>Choose a file</strong></label>
            <h3 style={{fontSize:'12px',color:'red',fontWeight:'400'}}>{previewError}</h3>
            <div className="ImagePreview"><img src={imagePreview}  alt="" style={{height:'15rem',width:'15rem'}}/></div>
          </div>
          <div className="submitButton">
              <button onClick={()=>{postdetails()}} className='submitButton' style={{backgroundColor:'rgb(34, 157, 228)',fontSize:'1.1rem',fontWeight:400,background:'transaparent',color:'white',border:'none',cursor:'pointer',padding:'0.5rem 1rem'}}>Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
