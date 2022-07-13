const mongoose = require('mongoose');

const userdetailSchema = mongoose.Schema({
    fname: {
        type : String,
        require : true
    },
    lname : {
        type : String,
        require: true
    },
    country : {
        type : String,
        require: true
    },
    house_number : {
        type : String,
        require: true
    },
    appartment_name : {
        type : String,
        require: true
    },
    city : {
        type : String,
        require: true
    },
    postcode : {
        type : String,
        require: true
    },
    phone : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require: true
    },
    optradio : {
        type : String,
        require: true
    }
});

const userDetail = mongoose.model('userDetail', userdetailSchema);

module.exports = userDetail;