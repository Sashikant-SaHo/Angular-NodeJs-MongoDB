var cluster = require('cluster');
var os = require('os');
var length = os.cpus().length;
if(cluster.isMaster){
    console.log("Main thread-- master ");

    for(var i=1;i<=length;i++){
        cluster.fork();
    }

    cluster.on('exit',(worker,code,signal)=>{
console.log(worker.process.pid+" dead")
cluster.fork();
    })

    cluster.on('listening',(worker,address)=>{
console.log("Worker with "+worker.id+" - "+worker.process.pid+"--"+address.address+"--"+address.port)
    })

}else{
    var express = require("express");
    var app = express()
    var router = express.Router();
    router.get('/record',(req,res)=>{
        res.json({
            message : "hello"+process.pid
        })
    })
    app.use('/api',router);
    app.listen(3000,()=>{
        console.log('Listining');
    })
}