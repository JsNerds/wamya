var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Package = new Schema({
  Name: String,
  dimension: [],
  sourceAddress: [],
  destinationAddress: [],
  location: [],
  type: String,
  deliveryMan: Number,
  client: Number,
});

module.exports = mongoose.model('Package', Package);
