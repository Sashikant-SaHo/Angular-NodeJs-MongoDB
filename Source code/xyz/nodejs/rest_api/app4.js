var express = require('express');
var app = express();
const nodemailer = require('nodemailer');
var router = express.Router();

router.get('/email',(req,res)=>{
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        pool: true,
        host: 'smtp.gmail.com',
        port: 587,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "princeroy2593@gmail.com", // generated ethereal user
            pass: "Vikrambala@420" // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'princeroy2593@gmail.com', // sender address
        to: 'pankaj.7613@gmail.com, fagvipatel007@gmail.com', // list of receivers
        subject: 'New product added', // Subject line
        text: 'Refrigerator has been added to Home category', // plain text body
        html: '<b>Refrigerator has been added to Home category</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json({
                message : error
            })
            return console.log(error);
        }

        res.json({
            message : "email sent"
        })
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

});

app.use('/api',router);
app.listen(3000,()=>{
    console.log('Server starts')
})