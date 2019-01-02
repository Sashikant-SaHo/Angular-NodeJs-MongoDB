var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
name : String,
age : Number,
isMarried : Boolean,
department : String
});


module.exports = mongoose.model('User',userSchema);