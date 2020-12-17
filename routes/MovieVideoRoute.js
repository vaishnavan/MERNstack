const express = require('express');
const router = express.Router();
const Video = require('../model/MovieVideo');

//to post the image movie details
router.post('/video', (req,res) => {
    const video = new Video({
        streamType:req.body.streamType,
        title:req.body.title,
        videoUrl:req.body.videoUrl,
    })
    video.save()
    .then((data) => {
        res.json(data)
    })
});

//to get the image movie details
router.get('/allvideo', (req,res) => {
    Video.find()
    .then((data) => {
        res.json(data)
    });
});

module.exports = router;