const express=require("express");
const mongoose= require("mongoose");
const dotenv= require("dotenv");

const app= express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology:true}).then(()=>{
    console.log("MongoDB is connected")
}).catch((err)=>console.log(err));

app.listen(8000, ()=>{
    console.log("backend started");
})