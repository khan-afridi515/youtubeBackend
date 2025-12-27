const express = require("express");
const connectDB = require("./db");
const youtubeRouter = require("./route/router");
const app = express();
const cors = require("cors");

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

app.use(express.json());

app.use('/api/youtube', youtubeRouter);


app.listen(3000, ()=>{
     connectDB();
    console.log("http://localhost:3000/api/youtube/connectedYoutube")
})