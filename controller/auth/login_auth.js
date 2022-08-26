const User = require('./../../model/user_Login')
const bcrypt = require('bcryptjs')

exports.getLogin = (req, res) =>{
    res.render('auth/login')
}



// exports.loginforAdd =  (req, res) => {
//     if (!req.body.email || !req.body.password) {
//         res.redirect("login")
//         return
//     }
//     User.findOne({email: req.body.email})
//         .then((user) => {
//             if(bcrypt.compareSync(req.body.password, user.password)){
//                 res.redirect("admin/add-product")
//             }
//         })
//         .catch((error)=> {
//         console.log(error.message);
//         })
// }

// exports.getUsers = (req, res) => {
//     User.find()
//     .then((users)=> {
//         res.send({data:users,status: 200});
//     })
//     .catch((error) => {
//         res.send({message: error.message, status :400});
//     })
// }

exports.postLogin = (req,res) => {
    // if (!req.body.email || !req.body.password) {
    //     res.redirect("login")
    //     return
    // }
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user) {
            bcrypt.compareSync(req.body.password, user.password, (err, match) => {
                if (err) {
                    console.log("something is wrong");
                }
                if (match == true) {
                    session = req.session;
                    session.email = req.body.email;
                    res.redirect('/admin/add-product')
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
//     res.redirect("user/login")
// }