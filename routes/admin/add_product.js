const express = require('express')
const router = express.Router()
const app = express()
const multer = require('multer')

//file handling
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const filehandler = app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single("image"))
// addporduct controller
const productController = require('./../../controller/admin/add_product')
router.get('/add-product',productController.getAddproduct)
router.post('/add-product',filehandler,productController.postAddproduct);
// const updateproductRoute 
// router.get('/update',updateproductRoute)






module.exports = router;

