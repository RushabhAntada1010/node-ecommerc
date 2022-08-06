const alert = require('alert');
const user_Data = require('../models/user_details');
const Product = require('../models/product');

module.exports.index = async function(req,res){
    var productData = await Product.find({}).limit(8); 
    return res.render('index', {
        'productData' : productData
    });
}

module.exports.viewallproduct = async function(req,res){
    var data = await Product.find({});
    return res.render('shop', {
        'productData' : data
    });
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
        alert('Your Order Is Conform..')
        return res.redirect('back');
    })
}

module.exports.about = function(req, res){
    return res.render('about');
}

module.exports.blog = function(req,res){
    return res.render('blog');
}

module.exports.blogSingle = function(req,res){
    return res.render('blog-single');
}

module.exports.contact = function(req,res){
    return res.render('contact');
}

module.exports.proDetaile = async function(req,res){
    var id = req.query.id;
    // console.log(id);
    var data = await Product.findById(id).limit(4);
    return res.render('product-single',{
        'data' : data
    });
}

module.exports.addtocart = async function(req,res){
    var id = req.query.id;
    var data = await Product.findById(id);
    return res.render('cart', {
        'data' : data
    });
}