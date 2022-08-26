const User = require("../../model/user_Login")
const bcrypt = require ("bcryptjs");


exports.getSignup = (req, res) => {
    res.render("auth/signup")
}


//creating new user

exports.createNewUser = async (req, res) => {
    if (req.body.name && req.body.email && req.body.password && req.body.role) {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    console.log("A user already exists with that email");
                    res.redirect("signup")
                }
                else {
                    // console.log(req.body);
                    User.create({ ...req.body, password: hashPassword })
                        .then(newUser => {
                            console.log(newUser);
                            //* For API
                            // res.send({ newUser })
                            res.redirect("login")
                            return
                        })
                        .catch(err => {
                            console.log(err.message);
                            return
                        })
                }

            })
        return
    }
    res.redirect("/signup")
    console.log("Empty fields found");
    //* for API
    // res.send({message: "Empty fields", status:400})
    
}