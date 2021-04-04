var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Payment = new Schema({
  PaymentMethod: String,
  NameOnCard: String,
  creditCard: Number,
  CardType: String,
  SecurityCode: Number,
  EcpirationDate: Date,
  Country: String,
});

module.exports = mongoose.model("payment", Payment);
