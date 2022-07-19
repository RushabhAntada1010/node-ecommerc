const mongoose = require('mongoose');

const multer = require('multer');

const path = require('path');

const productImage = path.join('/upload/product');

const productSchema = mongoose.Schema({
    productName : {
        type : String,
        require: true
    },
    price : {
        type : String,
        require: true
    },
    category : {
        type : String,
        require: true
    },
    description : {
        type : String,
        require: true
    },
    productImage : {
        type : String,
        require: true
    },
})

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, path.join(__dirname,'..',productImage));
    },
    filename : function(req,file,cb){
        cb(null, file.fieldname + "-" + Date.now());
    }
})

productSchema.statics.uploadAvtar = multer({storage: storage}).single('productimage');
productSchema.statics.productImage = productImage;

const product = mongoose.model('product', productSchema);

module.exports = product;