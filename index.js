const express = require('express');
const volleyball = require('volleyball');
const bcrypt = require('bcryptjs');

const app = express();

app.use(volleyball);

app.get('/', (req,res) => {res.json({message:"Hello express" })});


function notFound(req,res,next) {
    res.status(404);
    const error = new Eroor('not Found', req.originUrl);
    next(error);
}

function errorHandler(){
    res.status(res.statusCode || 500);
    res.json({
        message: errorHandler.message,
function notFound(req,res,next) {
    res.status(404);
    const error = new Eroor('not Found', req.originUrl);
    next(error);
}

function errorHandler(){
    res.status(res.statusCode || 500);
    res.json({
        message: errorHandler.message,
        stack: error.stack
    });
}

const port = process.env.PORT ||5000;
app.listen(port,() => {console.log('listening on port ', port)
});

