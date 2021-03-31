var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Delivery = new Schema({
  FullName: String,
  Phone: Number,
  Status: Number,
  Region: String,
});

module.exports = mongoose.model("delivery_man", Delivery);
