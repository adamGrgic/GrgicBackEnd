const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var productController = require('./controller/productcontroller.js');

var app = express();
app.use(bodyParser.json());
// allows other front ends to use this data
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.use('/product', productController)

app.listen(3000, () => console.log('Server started at port : 3000')); 