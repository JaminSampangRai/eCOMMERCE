const config = require("./../../config/config")
const User = require("./../../model/user_Login")
const Logout = require("./../../model/api/logout");
const nodemailer = require("nodemailer");


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    //save user to database
    User.create ({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,8),
        isRole: req.body.isRole,
    })
    .then ((user) => {
        
    })
}