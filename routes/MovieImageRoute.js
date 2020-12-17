const express = require('express');
const router = express.Router();
const Image = require('../model/MovieImage');

//to post the image movie details
router.post('/image', (req,res) => {
    const image = new Image({
        streamType:req.body.streamType,
        title:req.body.title,
        imageUrl:req.body.imageUrl,
        rating:req.body.rating,
        releaseDate:req.body.releaseDate
    })
    image.save()
    .then((data) => {
        res.json(data)
    })
});

//to get the image movie details
router.get('/allimage', (req,res) => {
    Image.find()
    .then((data) => {
        res.json(data)
    });
});

module.exports = router;