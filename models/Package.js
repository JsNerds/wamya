var mongoose = require('mongoose');
var AddressSchema = require('./Address').AddressSchema
var LocationSchema = require('./Location').LocationSchema

var Schema = mongoose.Schema;

var Package = new Schema({
  Name: String,
  dimension: [],
  sourceAddress: AddressSchema,
  destinationAddress: AddressSchema,
  location: LocationSchema,
  type: String,
});

module.exports = mongoose.model('Package', Package);
