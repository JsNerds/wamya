var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var milestone = new Schema({
  Id: String,
  delivs: String,
  profit: String,
  stage: String,
  rating: String,
  badges: String,
});

module.exports = mongoose.model("milestone", milestone);
