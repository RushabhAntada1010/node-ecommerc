const express = require('express');

const routes = express.Router();

const homeController = require('../controller/home_controller');

console.log('router IS connected');


routes.get('/', homeController.index);

routes.get('/shop', homeController.shop);

routes.get('/wishlist', homeController.wishlist);

routes.get('/product-single', homeController.product_single);

routes.get('/cart', homeController.cart);

routes.get('/checkout', homeController.checkout);

routes.post('/conformOrder', homeController.conformOrder);

routes.get('/adminPage',homeController.admin_dashboard);


routes.use('/admin', require('./admin'));

module.exports = routes;