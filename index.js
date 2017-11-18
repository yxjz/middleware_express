/**
 * Created by Administrator on 2017/11/16.
 */
const express = require('express');
const http = require('http');
const app = express();
const bodypaser = require('body-parser');


function mid1(req,res,next) {
console.log(1);
next()
}
function mid2(req,res,next) {
    console.log(2);
    next()
}
function mid3(req,res,next) {
    console.log(3);
    res.end('down');
    //next()
}
app.use('/', mid1);
app.use('/article', mid2);
app.use('/abc', mid3);
app.use(bodypaser.json());
app.use(bodypaser.urlencoded({extend:true}));
app.use((req,res,next)=>{
    res.end('ni hao ');
    console.log('step 1');
    next()
});
app.use((req,res)=>{

    console.log('step 2');
    //console.log(req.url);
    res.end('ni hao 11')
});
app.use((err,res,req,next)=>{
    res.end(err)
})
const server = http.createServer(app);
server.listen('8888');
