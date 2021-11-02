// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port,()=>{
    console.log(`server run on http://localhost:${port}`)
})





const tempData = []
app.get('/all',(req,res)=>{
    console.log(tempData)
    res.send(tempData)
})
app.post('/',(req,res)=>{
    newentry = {
        temp : req.body.main.temp,
        date : req.body.dt,
    }
    tempData.push(newentry)
    res.send(tempData)
})

