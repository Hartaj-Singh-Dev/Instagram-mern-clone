const express = require('express');
const router = express.Router()
const Auth = require('../middleware/Auth');
const Posts = require("../models/postSchema")

router.get("/getPost",Auth,async(req,res)=>{
    try{
        console.log('Post Sented');
        const posts  = await Posts.find().populate("Postby",'_id name')
        res.status(200).json({posts:posts})
    }catch(err){
        console.log(err);
        res.send(err)
    }
    
})


router.post("/createPost",Auth,async (req,res)=>{
    try{
    const {body,pic} = req.body
    console.log(req.body);
    if(!body || !pic|| !body && !pic ){
        return res.status(400).json({Error:'Please Fill the data'})
    }
    req.rootUser.password = undefined
    const post = new Posts({
         body: body, Postby:req.rootUser,photo:pic
    })

    post.save()
     res.send(post)
    }catch(err){
        console.log(err);
        res.status(400).json({Error:err})
    }
}) 

router.get('/myPost',Auth,async(req,res)=>{
    try{
    const data = await Posts.find({Postby:req.userID}).populate('Postby','_id name')
    res.status(200).json({Myposts:data})
    }catch(err){
        console.log(err);
        res.status(404).json({Error :err})
    }
})

router.put('/like',Auth,async(req,res)=>{
    console.log(req.userID);
    try{
     await Posts.findByIdAndUpdate(req.body.postId,{
           $push:{Likes:req.userID}
       },{
           new:true
       },function(err,doc){
           if(err){
               console.log(err);
               res.send(err)
           }else{
               console.log(doc);
               res.send(doc)
           }
       })

    }catch(err){
        console.log(err);
        res.status(404).json({Error:"Something Error Occured"})
    }
})

router.put('/dislike',Auth,async(req,res)=>{
    console.log("Disliked");
    console.log(req.body.postId);
    try{
       await Posts.findByIdAndUpdate(req.body.postId,{
           $pull:{Likes:req.userID}
       },{
           new:true
       },function(err,doc){
        if(err){
            console.log(err);
            res.send(err)
        }else{
            console.log(doc);
            res.send(doc)
        }
    })

    }catch(err){
        console.log(err);
        res.status(404).json({Error:"Something Error Occured"})
    }
})

router.put('/comment',Auth,async(req,res)=>{
    try{
        const comment = {
            text:req.body.text,
            Postby:req.userID
        }
       await Posts.findByIdAndUpdate(req.body.postId,{
           $push:{comment:comment}
       },{
           new:true
       }.populate("comments.Postby",'_id name'))

    }catch(err){
        console.log(err);
        res.status(404).json({Error:"Something Error Occured"})
    }
})


module.exports = router