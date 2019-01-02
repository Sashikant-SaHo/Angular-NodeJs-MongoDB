var express  = require("express");
var app= express();
var router = express.Router();
var bodyParser = require('body-parser');
var jsonwebtoken = require('jsonwebtoken');
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
router.post('/login', function (req, res, next) {
   console.log(req.body);
if(req.body.email=="mohan@gmail.com" && req.body.password=="123456")
{
   var token =  jsonwebtoken.sign({
        user : req.body
    },"123456",{
       expiresIn : '7d' 
    })

    res.json({
        success : true,
        token : token
    })
}  
})

router.get('/users',(req,res)=>{
    var headers = req.headers;
    console.log(headers.token)
    jsonwebtoken.verify(headers.token,'123456',(err,user)=>{
      
var users = [
    {name : 'Mohan', age : 21},
    {name : 'Sohan', age : 22}
];
res.json({
    data : users
})

    })
})


app.use('/api',router);
app.listen(3000,()=>{
    console.log("Server is listining on port 3000")
})