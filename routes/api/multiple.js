const express = require('express')
const router = express.Router()

const app = express ()

const multipleController = require('./../../controller/api/add')
router.post('/multiple', multipleController.postMultiple)

module.exports = router