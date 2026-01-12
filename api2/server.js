const express = require("express");
const connectDB = require("./db");
const youtubeRouter = require("./route/router");
const app = express();
const cors = require("cors");
const serverless = require("serverless-http");


app.use(
    cors({
      origin: "*",
      method: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );

app.use(express.json());

let isConnected = false;

app.use(async (req, res, next) => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
    console.log("Database connected");
  }
  next();
});

app.use('/api/youtube', youtubeRouter);


module.exports = app;
module.exports.handler = serverless(app);