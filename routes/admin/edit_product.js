const express = require("express");
const router = express.Router();

const app = express();


//edit product controller
const editproductController = require('./../../controller/admin/edit_product');
//delete product controller
const deleteproductController = require('./../../controller/admin/delete_product');

//login controller
const loginController = require('./../../controller/auth/login_auth');

//category controller
const categoryController = require('./../../controller/admin/product_Category')


//edit product router
router.get("/edit-product/:id",editproductController.getProductDetails)
router.get("/edit_product",(req, res)=>{
    res.redirect('/admin/add-product')
}),
router.post("/edit-product/:id",editproductController.updateProductDetails)

//delete product router
router.get('/delete/:id',deleteproductController.deleteProduct)


//login router 
router.get('/login',loginController.getLogin);
router.post('/login',loginController.postLogin);


//controller router
router.get('/sCategory',categoryController.getProductCategory)
router.post('/sCategory',categoryController.postProductcategory)



module.exports = router;