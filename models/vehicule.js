var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Vehicule = new Schema({
  registrationNumber: String,
  model: String,
  weightCapacity: Number,
  trunkVolume: Number,
});

module.exports = mongoose.model("vehicule", Vehicule);
