var express = require('express');

var app = new express();

app.all('/error',function(req,res,next){
    next(new Error('not found'));
})

app.all('/log',function(req,res,next){
    console.log('request, query',req.query);
    next();
})

app.get('*',function(req,res){
    res.send('hello world!');
})

app.use(function(err,req,res,next){
    res.status(400).send({error:err.message});
    console.error(err.messge);
})

var port = process.env.PORT || 5000;
app.listen(port,function(){
    console.log('listening to port',port)
})