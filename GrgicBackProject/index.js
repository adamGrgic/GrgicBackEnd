const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var productController = require('./controller/productcontroller.js');

var app = express();
app.use(bodyParser.json());

app.use('/product', productController)

app.listen(3000, () => console.log('Server started at port : 3000')); 