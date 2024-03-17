
const mongoose = require('mongoose')
require('dotenv').config();


//define mongoDB connection URL

// const mongoURL = process.env.MONGO_LOCAL_URL
const mongoURL =  process.env.DB_URL;


// set up connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

// maintains the connection between mongo and node serveres

const db = mongoose.connection;

// define evnts for db Connection

db.on('connected', () =>{
    console.log("connectd to mongoDB server")
})

db.on('error', () =>{
    console.log("mongoDB error")
})

db.on('disconnected', () =>{
    console.log("disconnectd to mongoDB server")
})

module.exports = {db}