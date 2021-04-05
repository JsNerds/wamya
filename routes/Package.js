var express = require('express');
var router = express.Router();
var Package = require('../models/Package');
var Customer = require('../models/customer');
var Entreprise = require('../models/entreprise');

                                                /* ********** RESTFUL API ********** */


/** get all packages or get by name*/
router.get('/', function(req, res, next) {
  const Name = req.query.Name;
  var condition = Name ? { Name : { $regex: new RegExp(Name), $options: "i" } } : {};
  Package.find(condition,function(err,data){
    if(err) throw err;
    res.json(data);
  })
});

/* add package with Company id */
router.post('/addPackageCompany/:id', function(req,res,next){
  const package = new Package(req.body);
  try{
    Package.create(package).then( p =>{
      Entreprise.findByIdAndUpdate(
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
    res.send("Ajout Package with Company");
  }
  catch (error){
    res.send(error);
  }
});


/* add package with customer id */

router.post('/addPackageCustomer/:id', function(req,res,next){
  const package = new Package(req.body);
  try{
    Package.create(package).then( p =>{
      Customer.findByIdAndUpdate(
          req.params.id,
          {
            $push: { packages : p._id }
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
    res.send("Ajout Package with Customer");
  }
  catch (error){
    res.send(error);
  }
});

/*EDITTTTTTTTTTTTTTTTTT*/
router.post('/edit/:id', function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const mynewPackage = {
    Name: obj.name,
    dimension: obj.dimension,
    sourceAddress: obj.sourceAddress,
    destinationAddress: obj.destinationAddress,
  };
  Package.findByIdAndUpdate(req.params.id, mynewPackage, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("updated");
    }
  });
});


/* Delete Package*/
router.get('/delete/:id', function (req, res, next) {
  Package.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) console.log(err);
    res.redirect('/Package');
  });
});

module.exports = router;
