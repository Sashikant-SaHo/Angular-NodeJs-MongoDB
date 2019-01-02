// var express = require("express");
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());
// var route =express.Router();
// var users = [
// {
//     id : 0,
//     name : 'Mohan',
//     age :21,
//     dept : 'Javascript'
// },
// {
//     id : 1,
//     name : 'Sohan',
//     age :22,
//     dept : 'Java'
// },
// {
//     id : 2,
//     name : 'Rohan',
//     age :23,
//     dept : 'Php'
// }

// ];


// route.put('/users/:id',(req,res)=>{

// users[req.params.id] = req.body;
// res.json({
//     message : "Record Updated"
// })

// })

// route.delete('/users/:id',(req,res)=>{
//     var id = req.params.id;
//     console.log("id is ",id);
//     users.splice(id,1);
//     res.json({
//         message : 'Record deleted'
//     })
// })

// route.get('/users',(req,res)=>{
//     res.json({
//         data : users
//     })
// })

// route.post('/users',(req,res)=>{
//     console.log('The req is ',req.body)
//     users.push(req.body)
//     res.json({
//         message : "Record saved"
//     })
// })


// app.use("/api",route);
// // app.get('/message',(req,res)=>{
// // res.json({message : "Hello world"})
// // })

// app.listen(3000,()=>{
//     console.log('The server starts at 3000')
// })

var express = require("express");
var app = express();
var config = require('./config');
var mongoose =require('mongoose');
// mongoose.connect("mongodb://localhost/realstate",() =>{
//     console.log('mongoDb connected')
// })
mongoose.connect("mongodb://localhost/realstate",() =>{
    console.log('mongoDb connected')
})
var route = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var products = [

    {
        name : 'Refrigerator',
        catagory:'hOmeApp',
        cost: 15000,
        vendor:{
            name : 'Satya',
            contact:'BBSR'
        }
    },
    {
        name : 'Microven',
        catagory:'homeApp',
        cost: 10000,
        vendor:{
            name : 'Satya',
            contact:'BBSR'
        }
    }
    
];
route.get('/products', (req, res) => {
    res.json({
        data : products
    })

})

route.delete("/products/:id", (req,res)=>{
    var id = req.params.id;
    console.log("Id is ", id);
    products.splice(id,1);
    res.json({
        message : 'Record deleted' +id
    })
})

route.put("/products/:id", (req,res)=>{
   products[req.params.id] = req.body;
   res.json({
       message : "record updated"
   })
})

// app.get('/message',(req,res)=>{

//     res.json({message : "HelloWorld"})

// })

// route.post('/products',(req,res)=>{
//     products.push(req.body)
//     console.log('The req is ', req.body)
    
//     res.json({
//         message : "Record Saved"
//     })
// })





// app.use("/api",route);

// app.listen(config.port, () => {
//     console.log('The Server starts at 3000')
// })



//--------------------------------22/09/18--------------------------------

var express = require("express");
var app = express();
var router =express.Router();
var mongoose