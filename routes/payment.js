var express = require('express');
var router = express.Router();
var Payment = require('../models/payment');
var Customer = require('../models/customer')
var Entreprise = require('../models/entreprise');
const stripe = require("stripe")("sk_test_51IfWBLCVTWqP5309JTjdorJKTRm2p4oXBBe746cv5gR9lVnMyAy4373gs2mcIm0ceEu35XuVoJbLOVg98asz0sgV00mQZFDbV4");
var twilio = require('twilio');
var clientSMS = new twilio("AC1c4a7e63a7c65e00cde37b7e422f4724", "3a515fc8ed3e25378a4b23e76a5c95f9");
var {PaymentDetailsEmail } = require('../mailer');



/*********************************************   CRUD RESTFUL APIs For React   *********************************************/

/** Get All Payments

router.get('/', function(req, res, next) {
  Payment.find(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});
**/

/** Search Payments By NameOnCard and PaymentMethod **/

router.get('/', function(req, res, next) {
  const nameOnCard = req.query.nameOnCard;
  const paymentMethod = req.query.paymentMethod;
  var condition =
      nameOnCard ?
          { NameOnCard : { $regex: new RegExp(nameOnCard), $options: "i" } }
          :
          paymentMethod ?
          { PaymentMethod : { $regex: new RegExp(paymentMethod), $options: "i" } }
          : {};
  Payment.find(condition,function(err,data){
    if(err) throw err;
    res.json(data);
  }).populate("payments packages");
});




/** Tri NameOnCard and group by PaymentMethod **/

router.get('/triAndGroupe', function(req, res, next) {
  Entreprise.aggregate( [
    // Grouping pipeline
    { "$group": {
        "_id": '$PaymentMethod'
      }},
    // Sorting pipeline
    { "$sort": { "NameOnCard": -1 } }
  ],function(err,data){
    if(err) throw err;
    res.json(data);
  });
});





/** Get Payment By Id **/

router.get('/:id', function(req, res, next) {
  Payment.findById(req.params.id,function(err,data){
    if(err) throw err;
    res.json(data);
  }).populate("payments packages");
});



/** Add payment **/
router.post('/', function(req,res,next){
  const payment = new Payment(req.body);
  try{
    payment.save();
    res.send("Ajout");
  }
  catch (error){
    res.send(error);
  }
});


/** Add payment with update Customer's Payments 2 **/

router.post('/addPaymentCust/:id', function(req,res,next){
  const obj = JSON.parse(JSON.stringify(req.body));
  const newPayment = {
    PaymentMethod: obj.PaymentMethod,
    NameOnCard: obj.NameOnCard,
    Email:obj.Email,
    Address: {
      Street: obj.Street,
      City: obj.City,
      State: obj.State,
      ZipCode: obj.ZipCode
    },
    creditCard: obj.creditCard,
    CardType: obj.CardType,
    SecurityCode: obj.SecurityCode,
    ExpirationDate: obj.ExpirationDate,
    Country: obj.Country,
    Amount:obj.Amount,
    CreationDate: new Date()
  };

  try{
    Payment.create(newPayment).then( p =>{
      Customer.findByIdAndUpdate(
          req.params.id,
          {
            $push: { payments : p._id }
          },
          {new: true, useFindAndModify: false},
          function (err,customer){
            if (err) {
              console.log(err);
            } else {
              PaymentDetailsEmail(customer.Email,customer.UserName,obj.Amount,obj.NameOnCard,obj.creditCard)
              clientSMS.messages.create({
                body: `Congrats! ${customer.UserName} your package will reaches his destination after minutes `,
                to: '+21620566666',  // Text this number
                from: '+14079179267' // From a valid Twilio number
              })
                  .then((message) => console.log(message.sid));
              console.log("add");
            }

          }
      )
    });
    res.send("Ajout Payment with Entreprise");
  }
  catch (error){
    res.send(error);
  }
});



/** Add payment with update Entreprise's Payments 2 **/

router.post('/addPaymentEntrep/:id', function(req,res,next){
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log("Obj", obj)
  const newPayment = {
    PaymentMethod: obj.PaymentMethod,
    NameOnCard: obj.NameOnCard,
    Email:obj.Email,
    Address: {
      Street: obj.Street,
      City: obj.City,
      State: obj.State,
      ZipCode: obj.ZipCode
    },
    creditCard: obj.creditCard,
    CardType: obj.CardType,
    SecurityCode: obj.SecurityCode,
    ExpirationDate: obj.ExpirationDate,
    Country: obj.Country,
    Amount:obj.Amount,
    CreationDate: new Date()
  };

  try{
    Payment.create(newPayment).then( p =>{
      Entreprise.findByIdAndUpdate(
          req.params.id,
          {
            $push: { payments : p._id },
            Subscribed:true
          },
          {new: true, useFindAndModify: false},
          function (err,entrep){
            if (err) {
              console.log(err);
            } else {
              PaymentDetailsEmail(entrep.Email,entrep.Denomination,obj.Amount,obj.NameOnCard,obj.creditCard)
              console.log("add");
            }

          }
      )
    });
    res.send("Ajout Payment with Entreprise");
  }
  catch (error){
    res.send(error);
  }
});


/** AddPayment Stripe **/
router.post("/stripePayment", async (req, res) => {
  // Create a PaymentIntent with the order amount and currency
  let {amount , id } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency:"USD",
        description:"WAMYA FLEX",
        payment_method:id,
        confirm:true
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
    id:paymentIntent.id,
    success:true
  });
});




/** Update Payment **/
router.put('/update/:id',function(req,res,next){
  Payment.findByIdAndUpdate(req.params.id,{
    "NameOnCard" : "Saidi"
  },function(err,data){
    if(err) throw err;
    console.log('UPDATED');
    res.send("UPDATED OK");
  });
});


/** Delete All Payments **/
router.delete('/remove', function(req,res,next){
  Payment.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Payment were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while removing all tutorials."
        });
      });
});

/** Delete Payment By id **/
router.delete('/remove/:id', function(req,res,next){
  Payment.findByIdAndRemove(req.params.id,req.body, function(err,data) {
    if(err) throw err;
    console.log('DELETED');
    res.send("DELETED OK");
  })

});




module.exports = router;
