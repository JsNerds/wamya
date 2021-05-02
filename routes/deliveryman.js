var express = require("express");
var router = express.Router();
var delivery = require("../models/delivery_man");
var signature = require("../models/signature");
var User = require("../models/User");
var mile = require("../models/milestone");

var multer = require("multer");
var path = require("path");
const Signature = require("../models/signature");
var bcrypt = require("bcrypt");
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

router.get("/getmiles", function (req, res, next) {
  mile.find(function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});

router.get("/getrate/:id", function (req, res, next) {
  mile.find(
    { $or: [{ Id: req.params.id }, { Id: req.params.id }] },
    async function (err, data) {
      res.json(data[0]);
    }
  );
});
router.get("/getdev/:id", function (req, res, next) {
  delivery.findById(req.params.id, function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});
router.get("/getmileid/:id", function (req, res, next) {
  mile.findById(req.params.id, function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});

router.put("/updatedm/:id", upload, function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newCustomer = {
    FullName: obj.FullName,
    Username: obj.Username,
    Email: obj.Email,
    Phone: obj.Phone,
    address: obj.address,
    img: req.file.filename,
  };
  delivery.findByIdAndUpdate(
    req.params.id,
    newCustomer,
    async function (err, data) {
      if (err) throw err;
      await User.findOneAndUpdate(
        { Id: req.params.id },
        {
          Username: newCustomer.Username,
          Email: newCustomer.Email,
        }
      );
      console.log("UPDATED");
      res.send("UPDATED OK");
    }
  );
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

router.put("/updatemile/:id", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  const mynewmine = {
    delivs: obj.delivs,
    profit: obj.profit,
    rating: obj.rating,
    badges: obj.badges,
    stage: obj.stage,
  };
  console.log(obj);
  mile.findByIdAndUpdate(req.params.id, mynewmine, function (err) {
    if (err) throw err;
    res.send("done");
  });
});

/* POST 2*/
router.post("/add", upload, async function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  const kar = JSON.parse(obj.region);
  const hashedPassword = await bcrypt.hash(obj.pass, 10);

  const mynewdelivery = {
    FullName: obj.fullname,
    Username: obj.username,
    Email: req.body.mail,
    Date_birth: obj.date,
    Password: hashedPassword,
    Gender: obj.gender,
    Licence: obj.lic,
    address: obj.address,
    Phone: obj.phone,
    Status: obj.status,
    Region: kar,
    pdp: obj.pdp,
    img: req.file.filename,
    Type: "DeliveryManP",
  };
  var ids;
  console.log(kar);

  //console.log(mynewdelivery);

  delivery.create(mynewdelivery).then((d) => {
    (ids = d._id), console.log(ids);
    User.create({
      Id: d._id,
      Username: mynewdelivery.Username,
      Password: mynewdelivery.Password,
      Email: mynewdelivery.Email,
      img: mynewdelivery.pdp,
      Role: "DeliveryManP",
    }).then((d) => {
      (ids = d._id), console.log(ids);
      mile.create({
        _id: d.Id,
        Id: d.Id,
        delivs: "0",
        profit: "0",
        stage: "0",
        rating: "0",
        badges: "0",
      });
    });
  });
  res.send("Done");
});

/* POST company dm*/
router.post("/addcd", upload, async function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  const hashedPassword = await bcrypt.hash(obj.password, 10);

  const mynewdelivery = {
    FullName: obj.fullname,
    Username: obj.username,
    Email: req.body.email,
    Date_birth: obj.date,
    Password: hashedPassword,
    address: obj.address,
    Phone: obj.phone,
    Status: 3,
    img: req.file.filename,
    Type: "DeliveryManE",
  };
  var ids;
  //console.log(mynewdelivery);

  delivery.create(mynewdelivery).then((d) => {
    (ids = d._id), console.log(ids);
    User.create({
      Id: d._id,
      Username: mynewdelivery.Username,
      Password: mynewdelivery.Password,
      Email: mynewdelivery.Email,
      img: mynewdelivery.pdp,
      Role: "DeliveryManE",
    }).then((d) => {
      (ids = d._id), console.log(ids);
      mile.create({
        _id: d.Id,
        Id: d.Id,
        delivs: "0",
        profit: "0",
        stage: "0",
        rating: "0",
        badges: "0",
      });
    });
  });
  res.send("Done");
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
/*validate*/
router.post("/validate/:id", function (req, res, next) {
  console.log("waa");
  const mynewdelivery = {
    Status: 2,
  };
  delivery.findByIdAndUpdate(req.params.id, mynewdelivery, function (err) {
    if (err) {
      console.log(err);
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
router.delete("/delete/:id", function (req, res, next) {
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
