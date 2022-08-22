const express = require('express')
const router = express.Router()
const app = express()


//allproduct controller
const allproductController = require('./../../controller/admin/allproducts')

router.get("/all-product",allproductController.allProducts)



module.exports = router;

