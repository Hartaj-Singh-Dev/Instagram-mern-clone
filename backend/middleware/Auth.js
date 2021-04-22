const jwt = require('jsonwebtoken');
const Users = require('../models/userSchema');

const Auth = async (req,res,next) => {
    try{
        const Token = req.cookies.authToken
        const verify  =  await jwt.verify(Token,process.env.KEY)
        const rootUser = await  Users.findOne({
            _id: verify._id,
            "tokens.token": Token,
        })
        if(!rootUser){
            res.status(400).json({Error:"User not Found"})
        }

        req.Token = Token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next()
    }catch(err){
        res.status(404).json({ Error: "Sorry Unauthorisiod" });
    }
}

module.exports = Auth
