const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./GrgicBackProject/db.js/index.js');
var employeeController = require('./controllers/productcontroller.js');

var app = express();
app.use(bodyParser.json());

app.use('/product', productController)

app.listen(3000, () => console.log('Server started at port : 3000')); 