var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/Grgic');


var products = [
    new Product({
    // imagePath: ,
        title: 'Basic Floral Brushes',
        description: '16 edittable leaf brush templates. These are perfect for decorating borders, creating floral landscapes, or even adding some pizaz to your logo.' + 
        ' Package comes with a single adobe illustrator file, as well as separate .png files for each template.',
        price: 12.99
}),
    new Product({
    // imagePath: ,
        title: 'Advanced Floral Brushes',
        description: '16 edittable leaf brush templates. These are perfect for decorating borders, creating floral landscapes, or even adding some pizaz to your logo.' + 
        ' Package comes with a single adobe illustrator file, as well as separate .png files for each template.',
        price: 19.99
}),
    new Product({
    // imagePath: ,
        title: 'Basic Rune Brushes',
        description: '16 edittable leaf brush templates. These are perfect for decorating borders, creating floral landscapes, or even adding some pizaz to your logo.' + 
        ' Package comes with a single adobe illustrator file, as well as separate .png files for each template.',
        price: 12.99
}),
    new Product({
    // imagePath: ,
        title: 'Advanced Rune Brushes',
        description: '16 edittable leaf brush templates. These are perfect for decorating borders, creating floral landscapes, or even adding some pizaz to your logo.' + 
        ' Package comes with a single adobe illustrator file, as well as separate .png files for each template.',
        price: 19.99
}),
    new Product({
    // imagePath: ,
        title: 'Geometric Patterns',
        description: '16 edittable leaf brush templates. These are perfect for decorating borders, creating floral landscapes, or even adding some pizaz to your logo.' + 
        ' Package comes with a single adobe illustrator file, as well as separate .png files for each template.',
        price: 24.99
}),

];

var done = 0;
for (var i = 0; i< products.length; i++) {
    products[i].save(function(err,result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}