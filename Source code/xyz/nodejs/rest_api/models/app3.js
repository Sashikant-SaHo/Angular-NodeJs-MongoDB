var http = require('http');

var server = http.createServer((req,res)=>{
console.log("The method is "+req.method);
console.log('The url is '+req.url)
if(req.method=="GET" && req.url=="/posts"){

console.log("nside the get method");
}
if(req.method=="POST" && req.url == "/posts"){
    console.log('Inside the post method')
}

res.end("hi")

})

server.listen(3001,()=>{
    console.log('Server starts')
})