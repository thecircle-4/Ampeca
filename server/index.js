var express = require('express');
var routes = require('./routes/routes')
var bodyParser = require('body-parser')
var app=express();
const cors = require('cors');


app.use(express.json());
app.use(cors());


app.use("/api",routes)

app.listen(3000,()=>{
    console.log('listening on port 3000')
})