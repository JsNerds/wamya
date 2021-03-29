var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vehicule = new Schema({
  registrationNumber: String,
  model: String,
  image: String,
  weightCapacity: String,
  trunkDimension: String,
  deliveryMan: Number,
  package: Number,
});

module.exports = mongoose.model('vehicule', Vehicule);
