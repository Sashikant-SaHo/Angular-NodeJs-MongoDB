var fs = require('fs');

// fs.readFile("hello.txt",(err,data)=>{
// console.log(data+'')
// })

// fs.writeFile("sachin.txt","sachin is a good player",(err)=>{
// if(err){
//     console.log(err)
// }
// else{
//     console.log('File written')
// }
// })

fs.stat('sachin.txt',(err,record)=>{
console.log(record.isDirectory())
})