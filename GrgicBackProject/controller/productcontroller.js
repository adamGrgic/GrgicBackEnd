const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// makes a request
var { Product } = require('../models/product');
router.get('/', (_req, res) => res.json('Product Root'));
router.get('/list', (_req, res) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Product({
        // grabs the data from the body 
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
        // file: req.body.file,
    });
    //saves the data 
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Savev :' + JSON.stringify(err, undefined, 2)); }
    });
});

//updates existing record 
router.put('/:id', (req, res) => {
    const emp = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
        // file: req.body.file,
    })
    // request id => employee object (body) =>/ callback => response for API 
    Employee.findByIdAndUpdate({'_id': mongoose.Types.ObjectId(req.params.id)}, emp,
         (err, mongores) => {
            if (!err) {res.send(mongores); }
            else { console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2)); }
         });
})

module.exports = router;