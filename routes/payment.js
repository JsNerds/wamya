var express = require('express');
var router = express.Router();
var Payment = require('../models/payment');
var Customer = require('../models/customer')


/*********************************************   CRUD RESTFUL APIs For React   *********************************************/

/** Get All Payments **/
router.get('/', function(req, res, next) {
  Payment.find(function(err,data){
    if(err) throw err;
    res.json(data);
  });
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

router.post('/addPayment/:id', function(req,res,next){
  const payment = new Payment(req.body);
  try{
    Payment.create(payment).then( p =>{
      Customer.findByIdAndUpdate(
          req.params.id,
          {
            $push: { payments : p._id }
          },
          {new: true, useFindAndModify: false},
          function (err){
            if (err) {
              console.log(err);
            } else {
              console.log(Customer.findById(req.params.id))
            }

          }
      )
    });
    res.send("Ajout Payment with Customer");
  }
  catch (error){
    res.send(error);
  }
});



/** Update Customer **/
router.put('/update/:id',function(req,res,next){
  Payment.findByIdAndUpdate(req.params.id,{
    "NameOnCard" : "SAIDIIIII"
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












/*********************************************   CRUD WITH VIEWS TEST   *********************************************/



/** GET cutomers from  DB and fetch data to views  **/

router.get('/ShowCustomers', function (req, res, next) {
  Customer.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('showCustomer', { users: data });
    }
  });
});





/** Redirection to addCustomer view **/
router.get('/addCustomer', function (req, res, next) {
  res.render('addCustomer');
});






/** Get Cutsomer by Id and fetch data (Details) **/
router.get('/:id', function (req, res, next) {
  Customer.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('detailsCustomer', { user: data });
    }
  });
});





/** Add from view Form  **/
router.post('/add', function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newCustomer = {

    Cin: obj.cin,
    FirstName: obj.firstname,
    LastName: obj.lastname,
    UserName: obj.username,
    Password: obj.password,
    Email: obj.email,
    PhoneNumber: obj.phonenumber,
    Adress: {

    },
    payments: []
  };
  Customer.create(newCustomer, function (err) {
    if (err) {
      res.render('/addCustomer');
    } else {
      res.redirect('/customers/showCustomers');
    }
  });
});




/**  Fetch Data to Update Form **/
router.get('/edit/customer/:id', function (req, res, next) {
  Customer.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('editCustomer', { user: data });
    }
  });
});




/** Update from view Form  **/
router.post('/edit/:id', function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newCustomer = {
    Cin: obj.cin,
    FirstName: obj.firstname,
    LastName: obj.lastname,
    UserName: obj.username,
    Password: obj.password,
    Email: obj.email,
    PhoneNumber: obj.phonenumber,
    Adress: obj.adress
  };
  Customer.findByIdAndUpdate(req.params.id, newCustomer, function (err) {
    if (err) {
      res.render('/customer/edit/' + req.params.id);
    } else {
      res.redirect('/customers/showCustomers');
    }
  });
});



/** Delete customer Path and redirect to customers list **/
router.get('/delete/:id', function (req, res, next) {
  Customer.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) console.log(err);
    res.redirect('/customers/showCustomers');
  });
});




module.exports = router;
