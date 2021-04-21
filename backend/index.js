const express = require('express');
const dotenv = require('dotenv');
const multer = require('multer');
const bodyparser = require('body-parser');
const app = express();



dotenv.config({path:'config.env'})

const port = process.env.PORT

require('./Database/connection')

//Middleware
app.use(express.json())
app.use(require("./Routes/user"))
app.use('/uploads',express.static('upload'))

//Routes
app.get('/',(req,res)=>{
    res.status(200).send("Hello from the home page")
})

app.post('/upload',(req,res)=>{
    res.status(200).send(req.body)
})


//Listning
app.listen(port,()=>{console.log(`Listing on port ${port}`)})