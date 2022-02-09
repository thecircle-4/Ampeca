var express = require('express');
var routes = require('./routes/routes')
var bodyParser = require('body-parser')
var app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use("/api",routes)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3000,()=>{
    console.log('listening on port 3000')
})