var express = require('express');
var router = express.Router();
var delivery = require('../models/delivery');
var Customer = require('../models/customer');
var Entreprise = require('../models/entreprise');
var mongoose = require('mongoose');
const Package = require('../models/Package');
                                                /* ********** RESTFUL API ********** */


/** get all deliverys or get by name*/
router.get('/', function(req, res, next) {
  const Name = req.query.Name;
  var condition = Name ? { Name : { $regex: new RegExp(Name), $options: "i" } } : {};
  delivery.find(condition,function(err,data){
    if(err) throw err;
    res.json(data);
  }).populate("customer package driver")
});

/* start delivery */
router.post('/startDelivery', function(req,res){
    const package = new Package({
      note: req.body.package[0].note,
      dimension: 
      {
        Length: Number(req.body.package[0].dimension.Length),
        Height: Number(req.body.package[0].dimension.Height),
        Width: Number(req.body.package[0].dimension.Width)
      },
      type: req.body.package[0].type,
      weight: Number(req.body.package[0].weight)
    });
    console.log(package)
    try{
        Package.create(package).then( p => {
          var newDeliery = req.body;
          newDeliery.package = p._id;
          delivery.create(newDeliery).then(d => {
            if(req.body.CustomerModel.toLowerCase() == "customer")
            {
              Customer.findByIdAndUpdate(
                req.body.customer,
                {
                  $push: { deliveries : d._id }
                },
                {new: true, useFindAndModify: false},
                function (err){
                  if (err) {
                    res.send(err); 
                  } else {
                    res.send("Delivery started")
                  }
      
                }
            )
            }
            else{
              Entreprise.findByIdAndUpdate(
                req.body.customer,
                {
                  $push: { deliveries : d._id }
                },
                {new: true, useFindAndModify: false},
                function (err){
                  if (err) {
                    res.send(err)
                  } else {
                    res.send("Delivery started")
                  }
                }
            )
            }
            
          })
        })
    }catch (error){
        res.send(error);
      }
    
});

router.put("/updateDelivery", function(req,res) {
  delivery.findByIdAndUpdate(req.body.id, req.body, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("updated");
    }
  });
});

router.delete("/deleteDelivery/:id", function(req,res){
  
  delivery.findByIdAndRemove(req.params.id, function(err, del){
      if(err){
        res.send(err);
      }
      else
      {
        res.send(del);
      }
  });
});
router.put("/cancelDelivery/:id", function(req,res){
  delivery.findByIdAndUpdate(
    req.params.id,
    {
      $set: { state : -1 }
    },
    {new: true, useFindAndModify: false},
    function(err,doc){
      if (err) {
        res.send(err)
      } else {
        res.send("Delivery canceled")
      }
    })
})
router.get("/:id",function(req,res){
  delivery.findById(req.params.id,function(err,doc){
    if(err)
    {
      res.send(err);
    }
    else{
      res.send(doc);
    }
  }).populate("package")
});


module.exports = router;
