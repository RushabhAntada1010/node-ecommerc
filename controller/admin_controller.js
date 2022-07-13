const user = require('../models/admin_login');

module.exports.admin = function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/admin/dashbord'); 
    }
    return res.render('login-basic');
}

module.exports.registerData = function(req,res){
    user.uploadAvtar(req, res, function(err){
        if(err){
            console.log('Somthing is wrong..');
            return false;
        }
        if (req.file) {
            var imageName = user.image_Path +'/'+req.file.filename;
            user.create({
                username : req.body.username,
                email : req.body.email,
                password : req.body.password,
                image : imageName,
                phone: req.body.phone,
                address: req.body.address,
                state: req.body.state,
                zip : req.body.zip
            }, function(err,register_data){
                if (err) {
                    console.log('Data is not inserted..');
                    return false;
                }
                return res.redirect('back');
            })
        }
    });
}

module.exports.registerPage = function(req,res){
    return res.render('register-basic');
}

module.exports.deshbord = function(req,res){
    
        return res.render('admin'); 

}

module.exports.loginData = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/admin/dashbord'); 
    }
    return res.redirect('/admin/');
}

module.exports.settingPage = function(req,res){
    return res.render('admin_accountPage');
}

module.exports.destroySession = function(req,res){
    req.logout(function(err){
        console.log('err');
    });
    return res.redirect('/admin/')
}

module.exports.profilePage = function(req,res){
    return res.render('adminProfile');
}

module.exports.editpage = function(req,res){
    return res.render('userEdit');
}

module.exports.updateData = function(req,res){
    user.findByIdAndUpdate(req.body.edit_id, {
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        state: req.body.state,
        zip : req.body.zip
    }, function(err, editData){
        if (err) {
            console.log('Data not Update..');
            return false;
        }
        return res.redirect('/admin/profilePage');
    })
}

module.exports.changepass = function(req,res){
    return res.render('changePass');
}