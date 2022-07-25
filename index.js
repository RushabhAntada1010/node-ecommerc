const express = require('express');

const port = 9000;

const app = express();

const path = require('path');
const db = require('./config/mongoose');

const session = require('express-session');

const passport = require('passport');
 const passportLocal = require('./config/passport-local-strategy');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());

app.use('/asset' ,express.static(path.join(__dirname, '/asset')));

app.use(session({
    name : "Node",
    secret : 'NODE_PROJECT',
    saveUninitialized : false,
    resave : false,
    cookie:{
        maxAge : (1000 * 60 *100)
    }
}));

app.use(passport.initialize());

app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./router'));

app.use('/upload', express.static(__dirname+'/upload'));

app.listen(port, function(err){
    if (err) {
        console.log('server is not working !!');
        return false;
    }
    console.log('Your server available at http://localhost:9000')
})