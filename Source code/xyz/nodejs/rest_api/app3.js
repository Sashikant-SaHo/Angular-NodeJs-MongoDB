var express  = require("express");
var app= express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var router = express.Router();
router.get('/',(req,res)=>{
    res.json({
        message : "Hello World"
    })
})

router.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.json({
        message : 'File uploaded'
    })
  })

  router.post('/blogpics', upload.array('avatar',12), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.json({
        message : 'File uploaded'
    })
  })

app.use('/api',router);
app.listen(3000,()=>{
    console.log("Server is listining on port 3000")
})