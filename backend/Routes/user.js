const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router()
const emailvalidator = require('email-validator');
const Users  =require('../models/userSchema')
const Auth = require("../middleware/Auth")
require("../Database/connection")


router.get("/get",(req,res)=>{
    res.status(200).send("HIIIIIIIIIIIIIIIIIIIIIIIII")
})

router.post('/signup', async (req,res)=>{
    const {name,email,phone,password} = req.body
    if(!name && !email && !phone && !password ){
        res.status(404).json({Error:"Something missing"})
    }
    try{
        const userExist = await Users.findOne({email:email})
        if(userExist){
            res.status(404).json({Error:"User alerady exist"})
        }
        else if(!emailvalidator.validate(email)){
            res.status(404).json({Error:"Email not valid"})
        }
        else if(password.length < 5){
            res.status(404).json({Error:"Make the password strong"})
        }
        else{
            const newUser = new Users({name,email,phone,password})
            await newUser.save()
            res.status(200).json({Message:"User Registered Succuesfully"})
        } 
    }catch(err){
        console.log(err);
    }
        
})

router.post('/signin',async(req,res)=>{
    let token
    try{
        const {email,password} = req.body
        if(!email & !password || !email  || !password){
            res.status(404).json({Error:"Something is missing"})
        }
        const userexist =  await Users.findOne({email:email})
        if(userexist){
            const passcom = await bcrypt.compare(password,userexist.password)
            if(passcom){
                token = await userexist.generateAuthToken()
                await res.cookie("authToken",token,
                {httpOnly:true,sameSite:'none',secure:true}
                )
                res.status(200).json({Message:"Logged succuesfully"})
            }else{
                res.status(404).json({Error:"Sorry invalid Data"})
            }
        }else{
            res.status(404).json({Error:"Sorry user doesn't exist"})
        }

    }catch(err){
        console.log(err);
    }
})

router.get("/Userdata",Auth,(req,res)=>{
    console.log(req.rootUser);
    res.send("here is the token")
})

router.get('/logout',(req,res)=>{
    console.log('logouted');
    res.clearCookie('authToken',{path:'/'})
    res.status(200).json({Message:"LogedOut"})
})


module.exports = router