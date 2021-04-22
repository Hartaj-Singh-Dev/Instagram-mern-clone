const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
// const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    min: 3,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
    min: 10,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  cpassword: {
    type: String,
    require: true,
    trim: true,
  },
  date:{
      type:Date,
      default:Date.now()
  },
  tokens:[
      {
          token:{
              type:String,
              require:true
          }
      }
  ]
});


userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function(){
    try{
        const token = await jwt.sign({_id:this._id},process.env.KEY)
        this.tokens = this.tokens.concat({token:token})
        this.save()
        return token
    }catch(err){
        console.log(err);
    }
}


const Users = mongoose.model("users", userSchema);
module.exports = Users;
