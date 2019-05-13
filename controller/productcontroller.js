/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
require('mongoose');
const { ObjectId } = require('mongoose').Types;

// makes a request
const { Product } = require('../models/product');

router.get('/', (req, res) => res.json('Product Root'));
router.get('/list', (req, res) => {
  Product.find((err, docs) => {
    if (!err) { return res.send(docs); }
    return console.log(`Error in Retriving Products :${JSON.stringify(err, undefined, 2)}`);
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Product.findById(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Retrieving Product :${JSON.stringify(err, undefined, 2)}`); }
  });
});

router.post('/', (req, res) => {
  const product = new Product({
    // grabs the data from the body
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
    // saves the data
  product.save((err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Product Savev :${JSON.stringify(err, undefined, 2)}`); }
  });
});

// updates existing record
router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  const product = {
    // grabs the data from the body
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    file: req.body.file,
  };
  return Product.findByIdAndUpdate(req.params.id, { $set: product }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Product Update :${JSON.stringify(err, undefined, 2)}`); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Product.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in product delete :${JSON.stringify(err, undefined, 2)}`); }
  });
});


module.exports = router;


// router.put('/:id', (req, res) => {
//     const emp = new Product({
//         title: req.body.title,
//         description: req.body.description,
//         price: req.body.price,
//         file: req.body.file,
//     })
//     // request id => employee object (body) =>/ callback => response for API
//     Employee.findByIdAndUpdate({'_id': mongoose.Types.ObjectId(req.params.id)}, emp,
//          (err, mongores) => {
//             if (!err) {res.send(mongores); }
// eslint-disable-next-line max-len
//             else { console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2)); }
//          });
// })
