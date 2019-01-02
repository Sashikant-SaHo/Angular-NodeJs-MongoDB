var express = require('express');
var app =express();
var http = require('http');
var server = http.createServer(app);

var io = require('socket.io').listen(server);

io.on('connection',(socket)=>{
console.log('Socket opened');

socket.on('client_new_msg',(data)=>{
    console.log('New message ',data)
    io.in(data.room).broadcast.emit('server_new_message',{
        msg : data.msg,
        user : data.name,
        date : new Date()
    })
})

socket.on('new_joinee',(data)=>{
socket.join(data.room);
socket.in(data.room).broadcast.emit('server_new_joinee',{
    msg : data.name + ' successfully joined room '+data.room,
    user : data.name,
    date : new Date()
})
})



})


server.listen(3000,()=>{
    console.log('Server starts')
})