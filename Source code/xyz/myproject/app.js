var express = require('express');
var config = require('./config.js');
var app = express();
var os = require('os');

app.get('/',function(req,res){
var cpuCycles = os.cpus().length;
res.json({cpus : cpuCycles})
})

app.listen(config.port,function(){
    console.log('Server starts at port '+config.port)
})