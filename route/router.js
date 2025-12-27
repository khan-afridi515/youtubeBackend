const express = require('express');
const { connectYoutube, youtubeCallback, getChannels, uploadVideo, deleteAllChannels } = require('../controll/controller');
const upload = require('../multer');
const youtubeRouter = express.Router();



youtubeRouter.get("/connectedYoutube", connectYoutube);
youtubeRouter.get("/callback", youtubeCallback);
youtubeRouter.get("/gettingChannel", getChannels);
youtubeRouter.post("/shareVideo", upload.fields([
    { name: "video", maxCount: 1 }
  ]),  uploadVideo);

youtubeRouter.delete("/deletDb", deleteAllChannels);


module.exports = youtubeRouter;

