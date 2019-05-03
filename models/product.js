const mongoose = require('mongoose');


const Product = mongoose.model('Product', {
  // imagePath: {type: String, required: true},
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  image: { data: Buffer, contentType: String },
});

module.exports = { Product };
