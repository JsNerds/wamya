var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');


/*********************************************   CRUD RESTFUL APIs For React & PostMan  *********************************************/

/** Get All cutsomers

router.get('/', function(req, res, next) {
  Customer.find(function(err,data){
    if(err) throw err;
    res.json(data);
  }).populate("payments packages");
});
 **/



/** Search Customer By FirstName and LastName **/

router.get('/', function(req, res, next) {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  var condition =
      firstName ?
      { FirstName : { $regex: new RegExp(firstName), $options: "i" } }
      : lastName ?
          { LastName : { $regex: new RegExp(lastName), $options: "i" } }
          : {};
  Customer.find(condition,function(err,data){
    if(err) throw err;
    res.json(data);
  }).populate("payments deliveries");
});


/** Tri Customers by Username  **/

router.get('/triByUserName', function(req, res, next) {
  Customer.find(function(err,data){
    if(err) throw err;
    res.json(data);
  }).sort({UserName: -1}).populate("payments packages");
});


/** Get cutsomer By Id**/

 router.get('/:id', function(req, res, next) {
  Customer.findById(req.params.id,function(err,data){
    if(err) throw err;
    res.json(data);
  }).populate("payments packages");
});






/** Add Customer (Post Man)**/

router.post('/', function(req,res,next){
  const customer = new Customer(req.body);
  try{
  customer.save();
  res.send("Ajout");
  }
  catch (error){
    res.send(error);
  }
});





/** Add Customer (REACT) **/

router.post('/addCustomer', function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log("Obj", obj)
  const newCustomer = {
    Cin: obj.cin,
    FirstName: obj.firstname,
    LastName: obj.lastname,
    UserName: obj.username,
    Password: obj.password,
    Email: obj.email,
    PhoneNumber: obj.phoneNumber,
    Adress: {
      Street: obj.street,
      City: obj.city,
      State: obj.state,
      ZipCode: obj.zipCode
    },
    payments: [],
    packages: []
  };
  Customer.create(newCustomer, function (err) {
    if(err) throw err;
    res.send("AJOUT OK");
  });

});







/** Update Customer(REACT) **/

router.put('/update/:id',function(req,res,next){
  const obj = JSON.parse(JSON.stringify(req.body));
  const newCustomer = {
    FirstName: obj.firstname,
    LastName: obj.lastname,
    UserName: obj.username,
    Email: obj.email,
    PhoneNumber: obj.phoneNumber,
    Adress: {
      Street: obj.street,
      City: obj.city,
      State: obj.state,
      ZipCode: obj.zipCode
    }
  };
  Customer.findByIdAndUpdate(req.params.id,newCustomer,function(err,data){
    if(err) throw err;
    console.log('UPDATED');
    res.send("UPDATED OK");
  });
});








router.put('/update/:id',function(req,res,next){
  Customer.findByIdAndUpdate(req.params.id,{
    "FirstName" : "SAIDIIIII"
  },function(err,data){
    if(err) throw err;
    console.log('UPDATED');
    res.send("UPDATED OK");
  });
});






/** Delete All Customers **/

router.delete('/remove', function(req,res,next){
  Customer.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Customers were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while removing all tutorials."
        });
      });
});







/** Delete Customer By id **/

router.delete('/removeById/:id', function(req,res,next){
  Customer.findByIdAndRemove(req.params.id,req.body, function(err,data) {
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
  }).populate("payments");
});





/** Redirection to addCustomer view **/
router.get('/addCustomer', function (req, res, next) {
  res.render('addCustomer');
});






/** Get Cutsomer by Id and fetch data (Details) **/
router.get('/Details/:id', function (req, res, next) {
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
      Street: obj.street,
      City: obj.city,
      State: obj.state,
      ZipCode: obj.zipCode
    },
    payments: [],
    packages: []
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
  const newCustomer = {
    Cin: obj.cin,
    FirstName: obj.firstname,
    LastName: obj.lastname,
    UserName: obj.username,
    Password: obj.password,
    Email: obj.email,
    PhoneNumber: obj.phonenumber,
    Adress: {
      Street: obj.street,
      City: obj.city,
      State: obj.state,
      ZipCode: obj.zipCode
    },
    payments: [],
    packages: []
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
