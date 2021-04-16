var express = require("express");
var router = express.Router();
var delivery = require("../models/delivery_man");

/* GET contact DB. */
router.get("/", function (req, res, next) {
  delivery.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("show", { users: data });
    }
  });
});

router.get("/adddelivery", function (req, res, next) {
  res.render("add");
});

/*Geeeeettttttt*/
router.get("/:id", function (req, res, next) {
  delivery.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("detail", { user: data });
    }
  });
});
/* POST */
router.post("/", function (req, res, next) {
  var user = new delivery({ FullName: "Sarra slimen", Phone: 230000 });
  user.save();
  res.send("Added");
});
/* POST 2*/
router.post("/add", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));

  const mynewdelivery = {
    FullName: obj.fullname,
    Username: obj.username,
    Email: req.body.mail,
    Date_birth: obj.date,
    Password: obj.pass,
    Gender: obj.gender,
    Licence: obj.lic,
    Phone: obj.phone,
    Status: obj.status,
    Region: obj.region,
  };
  console.log(mynewdelivery);
  delivery.create(mynewdelivery, function (err) {
    if (err) {
      res.render("/adddelivery");
    } else {
      res.redirect("/deliveryman");
    }
  });
});
/*EDITTTTTTTTTTTTTTTTTT*/
router.post("/edit/:id", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const mynewdelivery = {
    FullName: obj.FullName,
    Phone: obj.Phone,
  };
  delivery.findByIdAndUpdate(req.params.id, mynewdelivery, function (err) {
    if (err) {
      res.render("/delivery/edit/" + req.params.id);
    } else {
      res.redirect("/deliveryman");
    }
  });
});
/* Delete contact*/
router.get("/delete/:id", function (req, res, next) {
  delivery.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) console.log(err);
    res.redirect("/deliveryman");
  });
});
router.get("/edit/delivery/:id", function (req, res, next) {
  delivery.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("editdelivery", { user: data });
    }
  });
});

module.exports = router;
