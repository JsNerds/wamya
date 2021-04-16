var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var delivery_man = new Schema({
  Username: String,
  Email: String,
  Password: String,
  FullName: String,
  Phone: Number,
  Status: Number,
  Region: String,
  Licence: String,
  Gender: String,
  Date_birth: Date,
});

module.exports = mongoose.model("delivery_man", delivery_man);
