//Requied modules
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const jokeRouter = require('./routes/joke');
require('dotenv').config();

//Configure veriables
const  PORT = process.env.PORT || 3000;
const app = express();

//MIDDLEWARE PIPELINE
//Use middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

//Routers
app.use('/joke', jokeRouter);


app.listen(PORT, function() {
    console.log(`Server is running in ${PORT}`);
})