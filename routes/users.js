var express = require('express');
var router = express.Router();
var User = require("../models/User")


/** Search Customer By FirstName and LastName **/

router.get('/', function(req, res, next) {
    const username = req.query.username;
    var condition =
        username ?
            { Username : { $regex: new RegExp(username), $options: "i" } }
            : {};
    User.find(condition,function(err,data){
        if(err) throw err;
        res.json(data);
    });
});


/** Add User (Post Man)**/

router.post('/', function(req,res,next){
    const user = new User(req.body);
    try{
        user.save();
        res.send("Ajout");
    }
    catch (error){
        res.send(error);
    }
});

module.exports = router;
