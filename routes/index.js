const express = require('express')
const router = express.Router()
const app = express()

//middleware
const indexMiddleware = require('./../middleware/index')

//controller 
const indexController = require('./../controller/index')

router.get('/',indexController.mainPage)

module.exports = router;