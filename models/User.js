var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
    Id: String,
    Username:String,
    Password:String,
    Role:String
});


module.exports = mongoose.model("user", User);
