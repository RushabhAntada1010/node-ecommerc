const mongoose = require('mongoose');
const { diskStorage } = require('multer');

const multer = require('multer');

const path = require('path');

const imagePath = path.join('/upload/user');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require: true
    },
    phone : {
        type : String,
        require: true
    },
    address : {
        type : String,
        require: true
    },
    state : {
        type : String,
        require: true
    },
    zip : {
        type : String,
        require: true
    }
})

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, path.join(__dirname,'..',imagePath));
    },
    filename : function(req,file,cb){
        cb(null, file.fieldname + "-" + Date.now());
    }
})

userSchema.statics.uploadAvtar = multer({storage: storage}).single('image');
userSchema.statics.image_Path = imagePath;

const user = mongoose.model('user', userSchema);
module.exports = user