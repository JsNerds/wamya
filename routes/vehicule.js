var express = require('express');
var router = express.Router();
var vehicule = require('../models/vehicule');

/* GET contact DB. */
router.get('/', function (req, res, next) {
  vehicule.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('showVehicule', { vehicules: data });
    }
  });
});

router.get('/addvehicule', function (req, res, next) {
  res.render('addVehicule');
});

/*Get*/
router.get('/:id', function (req, res, next) {
  vehicule.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('detail', { vehicule: data });
    }
  });
});
/* POST */
/*router.post('/addstat', function (req, res, next) {
  var user = new vehicule({ FullName: 'Sarra slimen', Phone: 230000 });
  user.save();
  res.send('Added');
});*/
/* POST 2*/
router.post('/add', function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newVehicule = {
    registrationNumber: obj.registrationNumber,
    model: obj.model,
    image: obj.image,
    weightCapacity: obj.weightCapacity,
    trunkDimension: obj.trunkDimension,
    deliveryMan: obj.deliveryMan,
    package: obj.package,
  };
  vehicule.create(newVehicule, function (err) {
    if (err) {
      res.render('/addvehicule');
    } else {
      res.redirect('/vehicule');
    }
  });
});
/*EDITTTTTTTTTTTTTTTTTT*/
router.post('/edit/:id', function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const mynewvehicule = {
    FullName: obj.FullName,
    Phone: obj.Phone,
  };
  vehicule.findByIdAndUpdate(req.params.id, mynewvehicule, function (err) {
    if (err) {
      res.render('/vehicule/edit/' + req.params.id);
    } else {
      res.redirect('/vehicule');
    }
  });
});
/* Delete contact*/
router.get('/delete/:id', function (req, res, next) {
  vehicule.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) console.log(err);
    res.redirect('/vehicule');
  });
});
router.get('/edit/vehicule/:id', function (req, res, next) {
  vehicule.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('editvehicule', { vehicule: data });
    }
  });
});

module.exports = router;
