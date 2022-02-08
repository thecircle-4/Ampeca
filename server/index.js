var express = require('express');
var routes = require('./routes/routes')
var app=express();
app.use("/api",routes)
app.listen(3000,()=>{
    console.log('listening on port 3000')
})