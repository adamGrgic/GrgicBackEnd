const mongoose = require('mongoose');


var Product = mongoose.model('Product', {
    // imagePath: {type: String, required: true},
    title: {type: String},
    description: {type: String},
    price: {type: Number},
    file: {type: String}

});

module.exports = { Product };