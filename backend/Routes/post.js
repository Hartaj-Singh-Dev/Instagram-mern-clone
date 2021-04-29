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


module.exports = router