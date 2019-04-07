var Product = require('../Models/products.js');

var mongoose = require('mongoose');

mongoose.connect();

var product = [
    new Product({
   image: '../views/images/classic_low_top.PNG',
    type: 'Converse',
    name: 'Classic Low Top',
    color: 'Black',
    price: 50.00
}),
    new Product({
        image: 'image',
        type: 'Jordan',
        name: 'Retro Steel',
        color: 'Red',
        price: 130.00,
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(err, result);
    done++;
    if (done === products.length){
        exit();
    }
}

function exit() {
    mongoose.disconnect();
}