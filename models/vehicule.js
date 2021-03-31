var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vehicule = new Schema({
  registrationNumber: String,
  model: String,
  image: String,
  weightCapacity: Number,
  trunkDimension: String,
  deliveryMan: String,
  package: String,
});

module.exports = mongoose.model('vehicule', Vehicule);
