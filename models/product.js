const mongoose = require('mongoose');

const multer = require('multer');

const path = require('path');

const productimagePath = path.join('/upload/product');

const productSchema = mongoose.Schema({
    pimage : {
        type: String,
        require: true
    },
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

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, path.join(__dirname,'..',productimagePath));
    },
    filename : function(req,file,cb){
        cb(null, file.fieldname + "-" + Date.now());
    }
})

productSchema.statics.puploadAvtar = multer({storage: storage}).single('pimage');
productSchema.statics.product_Path = productimagePath;

const product = mongoose.model('product',productSchema);
module.exports = product;