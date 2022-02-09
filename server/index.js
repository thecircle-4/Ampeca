var express = require('express');
var routes = require('./routes/routes')
var bodyParser = require('body-parser')
var app=express();
// testing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api",routes)
app.listen(3000,()=>{
    console.log('listening on port 3000')
})