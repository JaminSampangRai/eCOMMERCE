const session = require("express-session");

module.exports = (req, res, next) => {
    session= req.session
    console.log(session);
    if (session.email) {
        next()
        
    } else {
        res.render("auth/login");
    }

}