var http = require("http");
var fs = require("fs");
var server = http.createServer((req,res)=>{
if(req.method=="GET" && req.url=="/login"){
fs.readFile("login.html",(err,data)=>{
    res.writeHead(200,{
        'Content-type' : 'text/html'
    })
res.end(data)
})

}
console.log(req.method+"---"+req.url)
if(req.method=="POST" && req.url=="/login"){
    console.log(req);
req.on('data',(data)=>{
    console.log(data+'')
})


}

})

server.listen(3001,()=>{
    console.log('Server starts')
})