var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var signature = new Schema({
  img: String,
});

module.exports = mongoose.model("signature", signature);
