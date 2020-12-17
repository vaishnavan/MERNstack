const mongoose = require('mongoose');


const ImageSchema = new mongoose.Schema({
    
    streamType:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('Image',ImageSchema);