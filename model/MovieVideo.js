const mongoose = require('mongoose');


const VideoSchema = new mongoose.Schema({
    
    streamType:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Video',VideoSchema);