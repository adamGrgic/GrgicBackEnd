/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
require('./db.js');
const productController = require('./controller/productcontroller.js');
const subscriberController = require('./controller/subscribercontroller.js');
// const chargeController = require('./controller/chargecontroller.js');
const portfoliocontroller = require('./controller/portfoliocontroller');

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
// allows other front ends to use this data
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  next();
});

// routing
app.use('/portfolio', portfoliocontroller);
app.use('/product', productController);
app.use('/subscriptions', subscriberController);
// app.use('/charge', chargeController);

app.listen(3000, () => console.log('Server started at port : 3000'));
