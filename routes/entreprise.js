var express = require('express');
var router = express.Router();
var Entreprise = require('../models/entreprise');
var User = require('../models/User');
var {sendCompanyConfirmationEmail } = require('../mailer');
var bcrypt = require("bcrypt");



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
  console.log("Obj", obj);
  const hashedPassword = await bcrypt.hash(obj.Password,10);
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
    Password: hashedPassword,
    PhoneNumber: obj.PhoneNumber,
    Subscribed:false,
    SubscriptionExpirationDate: new Date(),
    payments: [],
    packages: []
  };

  const Denomination = await Entreprise.find({Denomination: newCompany.Denomination});
  const CINExist =  await Entreprise.find({ResponsibleCin: newCompany.ResponsibleCin});
  const EmailExist =  await Entreprise.find({Email: newCompany.Email});
  const UserameUserExist = await User.find({Username:newCompany.ResponsibleName});
  const EmaiUserExist = await User.find({Email:newCompany.Email});
  if(Denomination.length != 0)
  {
    console.log("Denomination");
    res.send("DenominationExist");
  }
  if(UserameUserExist.length != 0)
  {
    console.log("UserNameExist");
    res.send("UserNameExist");
  }
  else if ((EmailExist.length != 0) || (EmaiUserExist.length != 0) ){
    console.log("Email Exist");
    res.send("EmailExist");
  }
  else if (CINExist.length != 0 ){
    console.log("CIN Exist");
    res.send("CinExist");
  }
  else{
  Entreprise.create(newCompany,function (err,company) {
    if(err) throw err;
    sendCompanyConfirmationEmail(newCompany.Email,newCompany.Denomination,company._id);
    res.send(company._id);
  });
  }

});




/** Activate Company **/
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
          res.redirect(`http://localhost:${process.env.DOMAIN_REACT}/ActivatedAccount`);
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
  Entreprise.findByIdAndUpdate(req.params.id,newCompany,async function(err,data){
    if(err) throw err;
    await User.findOneAndUpdate({Id: req.params.id}, {
      Username: newCompany.ResponsibleName,
      Email: newCompany.Email,
    });
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


router.put('/updatePassword/:id', async function(req,res,next){
  const {currentPassword,password} = req.body;
  const hashedPassword = await bcrypt.hash(password,10);
  try {
    const user = await User.find({Id: req.params.id});
    if (await bcrypt.compare(currentPassword,user[0].Password) === false) {
      return res.send("WrongPassword");
    }
    else {
      Entreprise.findByIdAndUpdate(req.params.id, {Password:hashedPassword},async function(err,data){
        if(err) throw err;
        await User.findOneAndUpdate({Id: req.params.id}, {
          Password:hashedPassword
        });
        console.log('UPDATED');
        return res.send("PasswordUpdated");
      });
    }
  }
  catch (error){
    res.send(error);
  }
});




module.exports = router;
