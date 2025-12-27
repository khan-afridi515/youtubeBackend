const express = require("express");
const connectDB = require("./db");
const app = express();


app.use(express.json());

app.use('/api/v2/',(req, res)=>{
    res.send({msg:"This is my server"})
})


app.listen(3000, ()=>{
     connectDB();
    console.log("http://localhost:3000/api/v2")
})