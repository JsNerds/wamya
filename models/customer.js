var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Customer = new Schema({
  Cin: Number,
  FirstName: String,
  LastName: String,
  UserName: String,
  Password: String,
  Email: String,
  PhoneNumber: Number,
  Adress: String

});

module.exports = mongoose.model("customer", Customer);
