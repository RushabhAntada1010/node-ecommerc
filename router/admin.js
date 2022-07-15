const express = require('express');

const routes = express.Router();

const passport = require('passport');

const adminController = require('../controller/admin_controller');

console.log('admin routing is working');

routes.get('/' ,adminController.admin);

routes.post('/registerData', adminController.registerData);

routes.get('/registerPage', adminController.registerPage);

routes.post('/loginData', passport.authenticate('local',{failureRedirect: '/admin/'}),adminController.loginData);

routes.get('/dashbord',passport.checkAuthenticatedUser, adminController.deshbord);

routes.get('/settingPage', passport.checkAuthenticatedUser, adminController.settingPage);

routes.get('/destroySession', passport.checkAuthenticatedUser , adminController.destroySession);

routes.get('/profilePage', passport.checkAuthenticatedUser ,adminController.profilePage)

routes.get('/edit', passport.checkAuthenticatedUser , adminController.editpage);

routes.post('/updateData', passport.checkAuthenticatedUser , adminController.updateData);

routes.get('/changepass', passport.checkAuthenticatedUser , adminController.changepass);

routes.post('/updateDataPass', passport.checkAuthenticatedUser, adminController.updateDataPass);

module.exports = routes;