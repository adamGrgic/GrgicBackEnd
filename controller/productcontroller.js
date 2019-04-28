const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

// makes a request
var { Product } = require('../models/product');
router.get('/', (req, res) => res.json('Product Root'));
router.get('/list', (req, res) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    Product.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Product :' + JSON.stringify(err, undefined, 2)); }
     });
});

router.post('/', (req, res) => {
    var product = new Product({
        // grabs the data from the body 
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        file: req.body.file,
    });
    //saves the data 
    product.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Savev :' + JSON.stringify(err, undefined, 2)); }
    });
});

//updates existing record 
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

        var product = {
            // grabs the data from the body 
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            file: req.body.file,
        };
        product.findByIdAndUpdate(req.params.id, { $set: emp }, {new : true}, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2)); }
        });
        
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    product.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product delete :' + JSON.stringify(err, undefined, 2)); }

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
//             else { console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2)); }
//          });
// })

