const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

dotenv.config({path:'config.env'})
require('./Database/connection')
const port = process.env.PORT

require("./models/userSchema")
require("./models/postSchema")

//Middleware
app.use(express.json())
app.use(cookieParser())


app.use(cors({origin:"http://localhost:3000",credentials:true,"Access-Control-Allow-Origin":"http://localhost:3000"}))
app.use(require("./Routes/user.js"))
app.use(require("./Routes/post"))



//Routes
app.get('/',(req,res)=>{
    res.status(200).send("Hello from the home page")
})

//Listning
app.listen(port,()=>{console.log(`Listing on port ${port}`)})