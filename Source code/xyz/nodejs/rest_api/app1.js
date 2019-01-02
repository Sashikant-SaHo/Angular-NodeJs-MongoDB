var express = require("express");
var app = express();
var mongoose = require("mongoose");
var User = require('./models/user.model');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//connect with mlab start
mongoose.connect("mongodb://satyam:satyam123456@ds131742.mlab.com:31742/ecommerp",()=>{
    console.log("Database connected")
})

//connect with mlab end
var route =express.Router();

route.get('/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err){
            res.json({
                message : err
            })
        }
        else{
            res.json({
                record : users
            })
        }
    })
})

route.put('/users/:id',(req,res)=>{
    User.update({_id : req.params.id},req.body,(err,user)=>{
        if(err){
            res.json({
                message : err
            })
        }
        else{
            res.json({
                message : 'Record updated'
            })
        }
    })
})

route.delete('/users/:id',(req,res)=>{
    User.remove({_id : req.params.id},(err,user)=>{
if(err){
    res.json({
        message : err
    })
}
else{
    res.json({
        message : "Record deleted successfuly"
    })
}
    })
})


route.get('/users/:id',(req,res)=>{
    User.findOne({_id : req.params.id},(err,users)=>{
        if(err){
            res.json({
                message : err
            })
        }
        else{
            res.json({
                record : users
            })
        }
    })
})

route.post('/users',(req,res)=>{
    console.log('The req body is ',req.body)
    var user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.isMarried = req.body.isMarried;
    user.department = req.body.department;
    user.save();
    res.json({message : "User gets added successfully!"})
})
app.use('/api',route);
app.listen(3000,()=>{
    console.log('Server starts..')
})