const mongoose = require('mongoose');


const Blogs = mongoose.model('Blogs', {
  // imagePath: {type: String, required: true},
  Title: { type: String },
  Image: { type: String },
  Author: { type: String },
}, 'Blogs');

module.exports = { Blogs };
