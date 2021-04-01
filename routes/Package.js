var express = require('express');
var router = express.Router();
var Package = require('../models/Package');

/* GET Packages from DB. */
router.get('/', function (req, res, next) {
  Package.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('Packages', { package: data });
    }
  })
});

/* Render Add page from views. */
router.get('/addPackage', function (req, res, next) {
  res.render('addPackage');
});

/*Get Package By Id*/
router.get('/:id', function (req, res, next) {
  Package.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('detail', { user: data });
    }
  });
});
/* POST Add a Package */
router.post('/addstatic', function (req, res, next) {
  var package = new Package({ Name: "Khalil", Dimension: [20.3,10.3,30.3], sourceAddress: [20.3,10.3,30.3], destinationAddress: [[20.3,10.3,30.3]],location: [[20.3,10.3,30.3]]});
  package.save();
  res.send('Added');
});
/* POST 2 Add a Package*/
router.post('/add', function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const mynewPackage = {
    Name: obj.name,
    dimension: obj.dimension,
    sourceAddress: obj.sourceAddress,
    destinationAddress: obj.destinationAddress,
  };
  Package.create(mynewPackage, function (err) {
    if (err) {
      res.send(err)
    } else {
      res.send("added");
    }
  });
});
/*EDITTTTTTTTTTTTTTTTTT*/
router.post('/edit/:id', function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const mynewdelivery = {
    FullName: obj.FullName,
    Phone: obj.Phone,
  };
  delivery.findByIdAndUpdate(req.params.id, mynewdelivery, function (err) {
    if (err) {
      res.render('/delivery/edit/' + req.params.id);
    } else {
      res.redirect('/delivery');
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
router.get('/edit/delivery/:id', function (req, res, next) {
  delivery.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('editdelivery', { user: data });
    }
  });
});

module.exports = router;
