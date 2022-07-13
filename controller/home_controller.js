const alert = require('alert');
const user_Data = require('../models/user_details');

module.exports.index = function(req,res){
    return res.render('index');
}

module.exports.shop = function(req,res){
    return res.render('shop');
}

module.exports.wishlist = function(req,res){
    return res.render('wishlist');
}

module.exports.product_single = function(req,res){
    return res.render('product-single');
}

module.exports.cart = function(req,res){
    return res.render('cart');
}

module.exports.checkout = function(req,res){
    return res.render('checkout');
}

module.exports.admin_dashboard = function(req,res){
    return res.render('admin');
}

module.exports.conformOrder = function(req,res){
    // console.log(req.body);
    user_Data.create(req.body, function(err,userRecord){
        if (err) {
            console.log('data is not find');
            return false;
        }
        return res.redirect('back');
        alert('Your Order Is Conform..')
    })
}