const User = require ('./../../model/user_Login')

checkDuplicateUsernameorEmail = (req, res, next) => {
    console.log(req.body.name);

    //username
    User.findOne({name : req.body.name})
    .then((user) => {
        console.log(user)
        if (user) {
            res.status(400).send({
                message: "failed! Username is already in use!",
            });
            return;
        }


        //email
        User.findOne ({email: req.body.email})
        .then((user) => {
            if (user) {
                res.status(400).send({
                    message: "failed! email is already in use",
                })
                return;
            }

            next();
        })
        .catch((err)=> {
            res.status(400).send({
                message: "failed! emial is alreday in use",
            })
        })
    })
    .catch((err) => {
        res.status(400).send({
            message: "failed! user doesnt exist",
        });
    });
};

checkRolesExisted = (req, res, next) => {
    if (req.body.isRole) {
        for (let i = 0; i < req.body.isRole.length; i++) {
            if(!User.includes(req.body.isRole[i])) {
                res.status(400).send({
                    message: "failed! Role does not exist = " + req.body.isRole[i],
                });
                return;
            }
        }
    }
    next();
};


const verifySignup = {
    checkDuplicateUsernameorEmail: checkDuplicateUsernameorEmail,
    checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignup;