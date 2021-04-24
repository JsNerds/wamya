var express = require('express');
var router = express.Router();
var User = require("../models/User")
var ResetCode = require("../models/ResetCode");
var {SendResetPasswordEmail} = require("../mailer")


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


/** Reset User Password **/
router.post('/resetPassword', async function(req,res,next){
    const {Email} = req.body;
    const user = await User.find({Email: Email});
    try{
        if(user.length === 0){
           return  res.send("UserNotExist");
        }
        const resetCode = await ResetCode.find({Id: user[0].Id});
        if (resetCode.length !=0){
            res.send("EmailAlreadySent");
        }
        else {
            const code = user[0]._id.toString().substr(0,4);
            const newResetCode = new ResetCode({Id: user[0].Id,Code:code});
            await newResetCode.save();
            SendResetPasswordEmail(user[0].Email,user[0].Username,user[0].Id,code);

            res.send("EmailSended");
        }

    }
    catch (error){
        res.send(error);
    }
});



/** Reset User Password **/
router.post('/resetPassword/confirmation', async function(req,res,next){
    const {Code, id, password} = req.body;
    console.log(Code,id,password);
    try {
        const resetCode = await ResetCode.find({Code: Code});
        if (resetCode.length === 0) {
            console.log("WrongCode");
            return res.send("WrongCode");
        }
        else {
            const user = await User.find({Id: id});
            if (user.length === 0) {
                console.log("Send Again");
                return res.send("SendAgain");
            }
            else {
                await ResetCode.deleteOne({Code: Code});
                if(user[0].Role ==="Customer"){
                const newUser = new User({
                    Id: user[0]._id,
                    Username: user[0].UserName,
                    Password: password,
                    Email: user[0].Email,
                    Role: "Customer"
                });
                await User.deleteOne({Id: id});
                await User.create(newUser);
                }
                else
                {
                    const newUser = new User({
                        Id: user[0]._id,
                        Username: user[0].UserName,
                        Password: password,
                        Email: user[0].Email,
                        Role: "Company"
                    });
                    await User.deleteOne({Id: id});
                    await User.create(newUser);
                }

                return res.send("PasswordUpdated");
            }
        }
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
