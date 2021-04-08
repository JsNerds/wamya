var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AddressSchema = require("./Address").AddressSchema;

var Entreprise = new Schema({
  ResponsibleCin: Number,
  ResponsibleName: String,
  CreationYear: Date,
  CommercialName: String,
  Activity: String,
  HeadquartersAddress: AddressSchema,
  RegisterStatus: String,
  RegionalOffice: String,
  Denomination: String,
  TaxSituation: String,
  Email: String,
  Password: String,
  PhoneNumber: Number,
  SubscriptionExpirationDate: Date,
  payments: [
    {
      type: Schema.Types.ObjectId,
      ref: "payment"
    }
  ],
  packages: [
  {
    type: Schema.Types.ObjectId,
    ref: "Package"
  }
]
});

module.exports = mongoose.model("entreprise", Entreprise);
