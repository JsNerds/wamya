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


/** Delete All Users **/
router.delete('/remove', function(req,res,next){
    User.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Users were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
});

module.exports = router;
