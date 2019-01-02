var https = require('https');
https.get("https://reqres.in/api/users?page=2",(res)=>{
    var myData = '';
    res.on('data',(data)=>{
        console.log(data+'')
        myData += data;
    })
    res.on('end',()=>{
        res.end();
        console.log('Rest call ended')
    })
})