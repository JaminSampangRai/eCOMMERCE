const User = require('./../../model/user_Login')
const bcrypt = require('bcryptjs')

exports.getLogin = (req, res) =>{
    res.render('auth/login')
}


exports.postLogin = (req,res) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user) {
            bcrypt.compare(req.body.password, user.password, (err, match) => {
                if (err) {
                    console.log("something is wrong");
                }
                if (match == true) {
                    session = req.session;
                    session.email = req.body.email;
                    res.redirect('/admin/add_product')
                } else {
                    console.log("Credential does not match")
                }
            })
        } else {
            console.log("no user found");
        }
    })
    .catch(err => {
        console.log(err)
    })
}

// exports.logout = (req,res, next) => {
//     req.session.destroy();
//     res.redirect("/auth/login")
// }