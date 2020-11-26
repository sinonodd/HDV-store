const express = require('express');
const volleyball = require('volleyball');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();
const auth = require('./auth')
const passport = require('passport');

app.use(volleyball);
app.use(passport.initialize());

app.get('/', (req,res) => {res.json({message:"Hello express" })});


function notFound(req,res,next) {
    res.status(404);
    const error = new Eroor('not Found', req.originUrl);
    next(error);
}
app.use('/auth', auth);

function errorHandler(err,req,res,next){
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

const port = process.env.PORT ||5000;
app.listen(port,() => {console.log('listening on port ', port)
});

