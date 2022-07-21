const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pname: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require:true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

const product = mongoose.model('product',productSchema);
module.exports = product;