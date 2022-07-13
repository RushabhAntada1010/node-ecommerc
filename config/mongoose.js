const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projectData');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Db is not Working !!'));

db.once('open', function(err){
    if (err) {
        console.log('DataBase Is Not Workin !!');
        return false;
    }
    console.log('DataBase Is Working Successfully In This Project');
})

module.exports = db;