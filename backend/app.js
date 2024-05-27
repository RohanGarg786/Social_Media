const express =require("express")
const app= express();
const cookieParser =require("cookie-parser");

const config = {
    apiUrl: process.env.BASE_URL || 'http://localhost:3000'
  };

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path:"backend/config/config.env"});
}

// Example with Express and CORS
const cors = require('cors');
app.use(cors({
  origin: 'https://social-media-v6ur.onrender.com',
}));


app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));
app.use(cookieParser())

const post =require("./routes/post");
const user = require("./routes/user")


app.use(`${config.apiUrl}/api/v1`,post);
app.use(`${config.apiUrl}/api/v1`,user)



module.exports = app;