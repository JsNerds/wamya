var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
    Id: String,
    Username:String,
    Password:String,
    Email:String,
    Role:String
});


module.exports = mongoose.model("user", User);
