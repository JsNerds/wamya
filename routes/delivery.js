var express = require("express");
var router = express.Router();
var delivery = require("../models/delivery");
var Customer = require("../models/customer");
var Entreprise = require("../models/entreprise");
var mongoose = require("mongoose");
const Package = require("../models/Package");
/* ********** RESTFUL API ********** */

/** get all deliverys or get by name*/
router.get("/", function (req, res, next) {
  const Name = req.query.Name;
  var condition = Name
    ? { Name: { $regex: new RegExp(Name), $options: "i" } }
    : {};
  delivery
    .find(condition, function (err, data) {
      if (err) throw err;
      res.json(data);
    })
    .populate("customer package driver");
});
router.get("/getLastDeliveryByCustomer/:id", function (req, res) {
  delivery.findOne(
    { customer: req.params.id },
    {},
    { sort: { created_at: -1 } },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    }
  );
});
/* start delivery */
router.post("/startDelivery", function (req, res) {
  const package = new Package({
    note: req.body.package[0].note,
    dimension: {
      Length: Number(req.body.package[0].dimension.Length),
      Height: Number(req.body.package[0].dimension.Height),
      Width: Number(req.body.package[0].dimension.Width),
    },
    type: req.body.package[0].type,
    weight: Number(req.body.package[0].weight),
  });
  console.log(package);
  try {
    Package.create(package).then((p) => {
      var newDeliery = req.body;
      newDeliery.package = p._id;
      delivery.create(newDeliery).then((d) => {
        if (req.body.CustomerModel.toLowerCase() == "customer") {
          Customer.findByIdAndUpdate(
            req.body.customer,
            {
              $push: { deliveries: d._id },
            },
            { new: true, useFindAndModify: false },
            function (err) {
              if (err) {
                res.send(err);
              } else {
                res.json(d);
              }
            }
          );
        } else {
          Entreprise.findByIdAndUpdate(
            req.body.customer,
            {
              $push: { deliveries: d._id },
            },
            { new: true, useFindAndModify: false },
            function (err) {
              if (err) {
                res.send(err);
              } else {
                res.json(d);
              }
            }
          );
        }
      });
    });
  } catch (error) {
    res.send(error);
  }
});

router.put("/updateDelivery", function (req, res) {
  delivery.findByIdAndUpdate(req.body.id, req.body, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("updated");
    }
  });
});

router.delete("/deleteDelivery/:id", function (req, res) {
  delivery.findByIdAndRemove(req.params.id, function (err, del) {
    if (err) {
      res.send(err);
    } else {
      res.send(del);
    }
  });
});
router.put("/cancelDelivery/:id", function (req, res) {
  delivery.findByIdAndUpdate(
    req.params.id,
    {
      $set: { state: -1 },
    },
    { new: true, useFindAndModify: false },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send("Delivery canceled");
      }
    }
  );
});
router.get("/:id", function (req, res) {
  delivery
    .findById(req.params.id, function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    })
    .populate("package");
});

router.put("/confirmDeliveryCustomer/:id", function (req, res) {
  delivery.findByIdAndUpdate(
    req.params.id,
    {
      $set: { state: 2 },
    },
    { new: true, useFindAndModify: false },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send("Delivery confirmed by customer");
      }
    }
  );
});
/* ---------------------- driver part delivery ----------------------- */
router.put("/confirmDeliveryDriver/:id", function (req, res) {
  delivery.findByIdAndUpdate(
    req.params.id,
    {
      $set: { state: 2 },
    },
    { new: true, useFindAndModify: false },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send("Delivery confirmed by driver");
      }
    }
  );
});

router.put("/confirmsigndrop/:id", function (req, res) {
  delivery.findByIdAndUpdate(
    req.params.id,
    {
      $set: { state: 4 },
    },
    { new: true, useFindAndModify: false },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send("Delivery confirmed by driver");
      }
    }
  );
});

router.put("/acceptdelivery/:id", function (req, res) {
  delivery.findByIdAndUpdate(
    req.params.id,
    {
      $set: { state: 1 },
    },
    { new: true, useFindAndModify: false },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send("Delivery accepted");
      }
    }
  );
});

router.put("/confirmdrop/:id", function (req, res) {
  delivery.findByIdAndUpdate(
    req.params.id,
    {
      $set: { state: 3 },
    },
    { new: true, useFindAndModify: false },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send("Delivery confirmed");
      }
    }
  );
});

router.get("/delivsfordv/:id", function (req, res) {
  delivery
    .find(
      {
        state: 0,
        driver: req.params.id,
      },
      function (err, doc) {
        if (err) {
          res.send(err);
        } else {
          res.send(doc);
        }
      }
    )
    .populate("package");
});

router.get("/delivsongo/:id", function (req, res) {
  delivery
    .find({ state: 1, driver: req.params.id }, function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    })
    .populate("package");
});

router.get("/delivstatesecond/:id", function (req, res) {
  delivery
    .find({ state: 2, driver: req.params.id }, function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    })
    .populate("package");
});
router.get("/delivstatethird/:id", function (req, res) {
  delivery
    .find({ state: 3, driver: req.params.id }, function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    })
    .populate("package");
});

router.delete("/deleteAllDeliveries", function (req, res) {
  delivery.deleteMany({}).then(function (doc, err) {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});
router.put("/setfourth/:id", function (req, res) {
  delivery.findByIdAndUpdate(
    req.params.id,
    {
      $set: { state: 3 },
    },
    { new: true, useFindAndModify: false },
    function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send("Delivery confirmed");
      }
    }
  );
});

module.exports = router;
