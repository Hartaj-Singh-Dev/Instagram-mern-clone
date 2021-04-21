const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');

const userSchema =new mongoose.Schema({
    images:{
        type:String,
        require:true
    }

},{timestamps : true})

// userSchema.virtual('password').set(function(password){
//     this.hash_password = bcrypt.hash(password, 12)

// })
// userSchema.methods = {
//     authenticate: function(password){
//         return bcrypt.compare(password,this.hash_password)
//     }
// }

const Images = mongoose.model("Images",userSchema)
module.exports =  Images