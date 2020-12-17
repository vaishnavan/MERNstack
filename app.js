const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv/config');

//extra need
app.use(cors());
app.use(express.json());

//routes
app.use('/api/movie',require('./routes/MovieVideoRoute'));
app.use('/api/movie',require('./routes/MovieImageRoute'));

//port connected to 5000
app.listen(process.env.PORT, () => {
    console.log('server connected');
});

//To connect to DB
mongoose.connect(process.env.MONGODB, { useNewUrlParser:true, useUnifiedTopology:true }, (err) => {
    if(!err){
        console.log('DB connected');
    }else{
        console.log(err);
    }
});
