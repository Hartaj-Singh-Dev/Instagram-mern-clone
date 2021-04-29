const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    body:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        default:"no photo"
    },
    Postby:{
        type:ObjectId,
        ref:`users`
    },Likes:[{type:ObjectId,ref:'users'}],
    comments:[{
        type:String,
        Postby:{type:ObjectId,ref:'users'}
    }]

})

const Posts= mongoose.model("Posts",postSchema)
module.exports = Posts