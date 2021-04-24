var express = require('express');
var router = express.Router();
var Entreprise = require('../models/entreprise');
var User = require('../models/User');
var {sendCompanyConfirmationEmail } = require('../mailer');



/*********************************************   CRUD RESTFUL APIs For React   *********************************************/

/** Get All Entreprises

router.get('/', function(req, res, next) {
  Entreprise.find(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});
 **/


/** Search Entreprise By CommercialName and Denomination **/

router.get('/', function(req, res, next) {
  const commercialName = req.query.commercialName;
  const denomination = req.query.denomination;
  var condition =
      commercialName ?
          { CommercialName : { $regex: new RegExp(commercialName), $options: "i" } }
          : denomination ?
          { Denomination : { $regex: new RegExp(denomination), $options: "i" } }
          : {};
  Entreprise.find(condition,function(err,data){
    if(err) throw err;
    res.json(data);
  }).populate("payments deliveries");
});


/** Tri Customers by CreationYear  **/

router.get('/triByCreationYear', function(req, res, next) {
  Entreprise.find(function(err,data){
    if(err) throw err;
    res.json(data);
  }).sort({CreationYear: 1}).populate("payments deliveries");
});



/** Get Entrepruse By Id **/

router.get('/:id', function(req, res, next) {
  Entreprise.findById(req.params.id,function(err,data){
    if(err) throw err;
    res.json(data);
  }).populate("payments deliveries");
});


/** Add Entreprise **/
router.post('/', function(req,res,next){
  const entreprise = new Entreprise(req.body);
  try{
    entreprise.save();
    res.send("Ajout");
  }
  catch (error){
    res.send(error);
  }
});



/** Add Entreprise(REACT) **/
router.post('/addCompany', async function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log("Obj", obj)
  const newCompany = {
    ResponsibleCin: obj.ResponsibleCin,
    ResponsibleName: obj.ResponsibleName,
    CreationYear: obj.CreationYear,
    CommercialName: obj.CommercialName,
    Activity: obj.Activity,
    HeadquartersAddress: {
      Street: obj.Street,
      City: obj.City,
      State: obj.State,
      ZipCode: obj.ZipCode
    },
    RegisterStatus: obj.RegisterStatus,
    RegionalOffice: obj.RegionalOffice,
    Denomination: obj.Denomination,
    TaxSituation: obj.TaxSituation,
    Email: obj.Email,
    Password: obj.Password,
    PhoneNumber: obj.PhoneNumber,
    Subscribed:false,
    SubscriptionExpirationDate: new Date(),
    payments: [],
    packages: []
  };

  const Denomination = await Entreprise.find({Denomination: newCompany.Denomination});
  if(Denomination.length != 0)
  {
    console.log("Denomination");
    res.send("DenominationExist");
  }
  else{
  Entreprise.create(newCompany,function (err,company) {
    if(err) throw err;
    sendCompanyConfirmationEmail(newCompany.Email,newCompany.Denomination,company._id);
    res.send(company._id);
  });
  }

});




/** Activate Customer **/
router.get('/ActivateCompany/:id',async function (req, res, next) {
  Entreprise.findById(req.params.id).then( e => {
        User.create({
          Id: e._id,
          Username: e.ResponsibleName,
          Password: e.Password,
          Email: e.Email,
          Role:"Company"
        }, function (err,user) {
          if(err) throw err;
          res.redirect("http://localhost:3022/ActivatedAccount");
          res.end();
        });
      }
  );
});



/** Update Entreprise Subscription (REACT) **/
router.put('/UpdateSubscription/:id',function(req,res,next){

  Entreprise.findByIdAndUpdate(req.params.id,req.body,function(err,data){
    if(err) throw err;
    console.log('UPDATED');
    res.send("UPDATED OK");
  });
});



/** Update Entreprise(REACT) **/

router.put('/update/:id',function(req,res,next){
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log("Company : ",obj)
  const newCompany = {
    ResponsibleCin: obj.ResponsibleCin,
    ResponsibleName: obj.ResponsibleName,
    CreationYear: obj.CreationYear,
    CommercialName: obj.CommercialName,
    Activity: obj.Activity,
    HeadquartersAddress: {
      Street: obj.Street,
      City: obj.City,
      State: obj.State,
      ZipCode: obj.ZipCode
    },
    RegisterStatus: obj.RegisterStatus,
    RegionalOffice: obj.RegionalOffice,
    Denomination: obj.Denomination,
    TaxSituation: obj.TaxSituation,
    Email: obj.Email,
    PhoneNumber: obj.PhoneNumber,
  };
  Entreprise.findByIdAndUpdate(req.params.id,newCompany,function(err,data){
    if(err) throw err;
    console.log('UPDATED');
    res.send("UPDATED OK");
  });
});




/** Delete All Entreprises **/
router.delete('/remove', function(req,res,next){
  Entreprise.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Entreprises were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while removing all tutorials."
        });
      });
});



/** Delete Entreprise By id **/
router.delete('/remove/:id', function(req,res,next){
  Entreprise.findByIdAndRemove(req.params.id,req.body, function(err,data) {
    if(err) throw err;
    console.log('DELETED');
    res.send("DELETED OK");
  })

});




module.exports = router;