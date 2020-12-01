const express = require('express');
const volleyball = require('volleyball');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();
const auth = require('./auth')
const passport = require('passport');
const {verify} = require('./auth/utiles.js');

app.use(volleyball);
app.use(passport.initialize());

// check autho
async function checkAuthHeaderSetUser(req,res,next) {
    const authorization = req.get('authorization');
    if(authorization){
        const token = authorization.split(" ")[1];
        try{
            const user = await verify(token);
            req.user = user;
            console.log(user);
        }
        catch(error){
            console.error(error);
        }
    }
    next();
}
async function checkAuthHeaderSetUserUnauthorized(req,res,next) {
    const authorization = req.get('authorization');
    if(authorization){
        const token = authorization.split(" ")[1];
        try{
            const user = await verify(token);
            req.user = user;
            return next();
        }
        catch(error){
            console.error(error);
        }
    }
    res.status(401);
    next(new Error('un-authorized'));
}
//header check middlware
app.get('/', (req,res) => {res.json({message:"Hello express" })});


function notFound(req,res,next) {
    res.status(404);
    const error = new Error('not Found', req.originUrl);
    next(error);
}
// auth route
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

app.use(notFound);
app.use(errorHandler);
