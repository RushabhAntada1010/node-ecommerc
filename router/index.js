const express = require('express');

const routes = express.Router();

const homeController = require('../controller/home_controller');

console.log('router IS connected');


routes.get('/', homeController.index);

routes.get('/viewallproduct', homeController.viewallproduct);

routes.get('/wishlist', homeController.wishlist);

routes.get('/product-single', homeController.product_single);

routes.get('/cart', homeController.cart);

routes.get('/checkout', homeController.checkout);

routes.post('/conformOrder', homeController.conformOrder);

routes.get('/adminPage',homeController.admin_dashboard);

routes.get('/about', homeController.about);

routes.get('/blog', homeController.blog);

routes.get('/blogSingle', homeController.blogSingle);

routes.get('/contact', homeController.contact);

routes.get('/proDetaile', homeController.proDetaile);

routes.get('/addtocart', homeController.addtocart);



routes.use('/admin', require('./admin'));

module.exports = routes;