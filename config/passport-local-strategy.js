const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const modelData = require('../models/admin_login');

passport.use(new passportLocal({
    usernameField : 'email'
}, function(email, password,done){
    modelData.findOne({email}, function(err,user){
        if(err){
            console.log("email not found!!");
            return done(null,false);
        }
        if(!user || user.password != password){
            console.log("password not match");
            return done(null,false);
        }
        return done(null,user);
    });
}));

passport.serializeUser(function(user,done){
    return done(null, user.id);
});

passport.deserializeUser(function(id,done){
    modelData.findById(id,function(err,user){
        if(err){
            console.log("record not found");
            return done(null,false);
        }
        return done(null,user);
    });
});

passport.checkAuthenticatedUser = function(req,res,next){
    
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/admin/');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
   return next();
}