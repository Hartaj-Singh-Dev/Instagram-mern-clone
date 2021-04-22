const express = require('express');
const router = express.Router()
const emailvalidator = require('email-validator');
const Users  =require('../models/appSchema')
require("../Database/connection")

router.get("/get",(req,res)=>{
    res.status(200).send("HIIIIIIIIIIIIIIIIIIIIIIIII")
})

router.post('/signup', async (req,res)=>{
    const {name,email,password,cpassword} = req.body
    if(!name || !email || !password || !cpassword){
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
        else if (password !== cpassword){
            res.status(404).json({Error:"Password Not matched"})
        }else if(password.length < 5){
            res.status(404).json({Error:"Make the password strong"})
        }
        else{
            const newUser = new Users({name,email,password,cpassword})
            await newUser.save()
            res.status(200).json({Message:"User Registered Succuesfully"})
        } 
    }catch(err){
        console.log(err);
    }
        
})


module.exports = router