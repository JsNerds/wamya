var express = require("express");
var router = express.Router();
var delivery = require("../models/delivery_man");
var signature = require("../models/signature");
var User = require("../models/User");

var multer = require("multer");
var path = require("path");
const Signature = require("../models/signature");
const { render } = require("ejs");
router.use(express.static(__dirname + "./public/"));
// router.use(express.static(__dirname+"./public/"));
if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}
var Storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
var upload = multer({
  storage: Storage,
}).single("img");

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
router.get("/getdev", function (req, res, next) {
  delivery.find(function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});
router.get("/getsig", function (req, res, next) {
  signature.find(function (err, data) {
    if (err) throw err;
    res.json(data);
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
router.post("/add", upload, function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  const kar = JSON.parse(obj.region);
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
    Region: kar,
    img: req.file.filename,
  };
  console.log(kar);
  console.log(mynewdelivery);
  delivery.create(mynewdelivery).then((d) => {
    User.create(
      {
        Id: d._id,
        Username: mynewdelivery.Username,
        Password: mynewdelivery.Password,
        Role: "DeliveryManP",
      },
      function (err) {
        if (err) {
          res.render("/adddelivery");
        } else {
          res.redirect("/deliveryman");
        }
      }
    );
  });
});
/* POST signture*/
router.post("/addsign", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  const mynewconst = {
    img: obj.img,
  };
  console.log(obj);
  console.log(mynewconst);
  signature.create(mynewconst, function (err) {
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

router.get("/showdms", function (req, res, next) {
  const Username = req.query.username;
  const Phone = req.query.phone;
  var condition = Username
    ? { Username: { $regex: new RegExp(Username), $options: "i" } }
    : Phone
    ? { Phone: { $regex: new RegExp(Phone), $options: "i" } }
    : {};
  delivery
    .find(condition, function (err, data) {
      if (err) throw err;
      res.json(data);
    })
    .populate("Delivery men");
  console.log(res.json(data));
  render(res.json(data));
});

module.exports = router;
