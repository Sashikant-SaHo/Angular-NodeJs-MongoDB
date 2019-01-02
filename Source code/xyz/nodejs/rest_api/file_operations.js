var fs = require("fs");
var rawData = "India is a great country";

// fs.rmdir("./myNotes", (err) => {
//     if (err) {
//         console.log("The error is " + err)
//     }
//     else {
//         console.log('Directory deleted')
//     }
// })

fs.rename("india.txt","india_great.txt",(err)=>{
    if(err){
        console.log("The error is "+err);
    }
    else{
        console.log('File renamed')
    }
})






// fs.unlink("./myNotes/app5.js",(err)=>{
//     if(err){
//         console.log('The error is '+err)
//     }
//     else{
//         console.log('File deleted');
//     }
// })

// fs.readdir("./myNotes",(err,files)=>{
//     if(err){
//         console.log("The error is "+err)
//     }
//     else{
//         files.forEach((file)=>{
//             console.log(file)
//         })
//     }
// })



// fs.mkdir("./myNotes",(err)=>{
//     if(err){
//         console.log('The error is '+err);
//     }
//     else{
//         console.log(err)
//     }
// })


// var data = fs.readFileSync("up.txt");
// console.log(data+'');
// console.log("Hi")
// fs.readFile("up.txt",(err,data)=>{
//     if(err){
//         console.log("The error is "+err);
//     }
//     else{
//         console.log('The data is '+data)
//     }
// })
// console.log("hi");



// fs.writeFile("india.txt",rawData,(err)=>{
// if(err){
//     console.log('The error is '+err)
// }
// else{
//     console.log("File wriiten")
// }
// })
// var rawData2 = "UP is one of the largest number of great personalities";
// fs.writeFileSync("up.txt",rawData2)
// console.log('The write operation done')


