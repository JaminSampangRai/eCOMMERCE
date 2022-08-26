const express = require('express')
const router = express.Router()


const userAuth = require ('./../../controller/auth/signup')

//login controller
const loginController = require('./../../controller/auth/login_auth');



router.get('/signup',userAuth.getSignup)
router.post('/signup',userAuth.createNewUser)

//login router 
router.get('/login',loginController.getLogin);
router.post('/login',loginController.postLogin);





module.exports = router