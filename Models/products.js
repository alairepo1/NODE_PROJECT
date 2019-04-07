const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    image: {type: String, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    color: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);