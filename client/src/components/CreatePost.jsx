import React, { useState } from "react";
import "../Styles/CreatePost.css";

const CreatePost = () => {
    const [imagePreview, setimagePreview] = useState()
    const [previewError, setpreviewError] = useState()
    const handleFile = (e)=>{
        const image = e.target.files[0]
        const imageTypes = ["image/png","image/jpg","image/jpeg",'image/PNG']
        if(image && imageTypes.includes(image.type)){
            let imageRead = new FileReader()
            imageRead.onloadend= ()=>{
                setimagePreview(imageRead.result)
                setpreviewError('')
            }
            imageRead.readAsDataURL(image)
            console.log(" Image Selected");
        }else{
            setpreviewError('Sorry Image type unspported')
        }
    }
  return (
    <>
      <div className="createpostFull">
        <div className="centerCreatePost">
            <h1 style={{fontWeight:'400'}}>Create Post</h1>
            <form method='POST'>
            <div className="caption" style={{marginBottom:'1rem'}}>
                <textarea name="" id="" cols="40" rows="5" placeholder="Add Caption"></textarea>
            </div>
          <div class="file">
            <input  type="file" name="file" id="file" class="inputfile" accept="image/*" onChange={(e)=>{handleFile(e)}} />
            <label for="file"><strong>Choose a file</strong></label>
            <h3 style={{fontSize:'12px',color:'red',fontWeight:'400'}}>{previewError}</h3>
            <div className="ImagePreview"><img src={imagePreview} alt="" style={{height:'15rem',width:'15rem'}}/></div>
          </div>
          <div className="submitButton">
              <button onClick={(e)=>{e.preventDefault()}} className='submitButton' style={{backgroundColor:'rgb(34, 157, 228)',fontSize:'1.1rem',fontWeight:400,background:'transaparent',color:'white',border:'none',cursor:'pointer',padding:'0.5rem 1rem'}}>Post</button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
