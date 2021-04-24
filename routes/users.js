var express = require('express');
var router = express.Router();
var User = require("../models/User");
var Customer = require("../models/customer");
var Entreprise = require("../models/entreprise");
var ResetCode = require("../models/ResetCode");
var {SendResetPasswordEmail} = require("../mailer");
var bcrypt = require("bcrypt");



/** Search Customer By FirstName and LastName **/

router.get('/', function(req, res, next) {
    const username = req.query.username;
    const password = req.query.password;
    var condition =
        username ?
            { Username : { $regex: new RegExp(username), $options: "i" } }
            : {};
    User.find(condition,async function(err,data){
        if(err) throw err;
        if(data.length === 0)
        {
            return res.send("UserNotFound");
        }
        else if (await bcrypt.compare(password,data[0].Password) === false){
            console.log("WrongPassword")
            return res.send("WrongPassword");
        }
        else {
        res.json(data);
        }
    });
});


/** Add User (Post Man)**/

router.post('/', async function(req,res,next){
    const password = req.body.Password;
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User(   {
        Username:req.body.Username,
        Password:hashedPassword,
        Role:req.body.Role
    });
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
            const code = user[0]._id.toString().substr(20,24);
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



/** Reset User Password Confirmation **/
router.post('/resetPassword/confirmation', async function(req,res,next){
    const {Code, id, password} = req.body;
    console.log(Code,id,password);
    const hashedPassword = await bcrypt.hash(password,10);

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
                    Id: id,
                    Username: user[0].Username,
                    Password: hashedPassword,
                    Email: user[0].Email,
                    Role: "Customer"
                });
                await User.deleteOne({Id: id});
                await User.create(newUser);
                    Customer.findByIdAndUpdate(id, {Password:hashedPassword},function(err,data){
                        if(err) throw err;
                        console.log('UPDATED');
                        return res.send("PasswordUpdated");
                    });
                }
                else
                {
                    const newUser = new User({
                        Id: id,
                        Username: user[0].Username,
                        Password: hashedPassword,
                        Email: user[0].Email,
                        Role: "Company"
                    });
                    await User.deleteOne({Id: id});
                    await User.create(newUser);
                    Entreprise.findByIdAndUpdate(id,{Password:hashedPassword},function(err,data){
                        if(err) throw err;
                        console.log('UPDATED');
                        return res.send("PasswordUpdated");
                    });
                }

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
