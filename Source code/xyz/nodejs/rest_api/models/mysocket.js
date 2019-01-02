var express = require('express');
var app =express();
var http = require('http');
var server = http.createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);

io.on('connection',(socket)=>{
console.log("")
socket.on('message',()=>{
    console.log("Message from client")
})

})



server.listen(3000,()=>{
    console.log('Server starts')
})


