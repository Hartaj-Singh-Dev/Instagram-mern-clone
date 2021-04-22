const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();



dotenv.config({path:'config.env'})
require('./Database/connection')
const port = process.env.PORT


//Middleware
app.use(express.json())
app.use(cookieParser())


app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(require("./Routes/route.js"))



//Routes
app.get('/',(req,res)=>{
    res.status(200).send("Hello from the home page")
})

app.post('/reg',(req,res)=>{
    res.send("rykdjgccg")
})


//Listning
app.listen(port,()=>{console.log(`Listing on port ${port}`)})