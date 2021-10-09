const express = require("express");
const bodyParser = require("body-parser");
const path= require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>console.log("Connected to database successfully")).catch(err=>{console.log("Error is here: "<<err)});
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));
const postRouter = require("./routes/post");
app.use("/post",postRouter);
app.get("/backtrackbackend",(req,res)=>{
    res.render("back.ejs");
})
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/client/build/index.html'));
});

const port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`Listening of Port : ${port}`);
});

