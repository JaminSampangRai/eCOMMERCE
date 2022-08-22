const Product = require('../../model/product')
const productsCategory = require('./../../model/product_Category')

exports.getAddproduct = (req,res) => {
    // Product.find().populate("category").exec((err, data) => {
    //     console.log(data)
    //     // res.render('admin/add_product',{data})
    //     res.send({data})
    // })   
    Product.find().populate("category").
        then(data => {
            res.status(200).send({ data, status: 200 })
        })
}

//get products via API
exports.getProduct = (req,res) => {
    Product.find({}).exec((err, data)=>{
        res.status(200).send({data, status: 200})
    })
}

exports.postAddproduct = async (req,res) => {
    console.log(req.file);
    if(
        !req.body.name ||
        !req.body.price ||
        !req.body.size ||
        !req.body.discription
        
        
    ) {
        req.status(422).send({message: "empty fields", status:422});
        return;
    } else {
        const product = new Product ({
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            discription: req.body.discription,
            image: req.file.filename,
            category: req.body.category
        });
        await product.save((err, result)=> {
            if(err){
                res.status(400).send(err.message);
                req.flash('message','product added failed')
            }else {
                res.status(201).send({
                    result,message: `${req.body.name}added successfully`,status:201,

                })
                req.flash('message','product added successfully')
            }
        })

    }
}



// Get all categories 

// exports.getProductCategory = (req, res) => {
//     productsCategory.find().then(data => {
//         res.status(200).send({data,status:200})
//         // res.render("admin/category")

//     })
// }


// // API for product and category detail

// exports.getProductwithcategory = (req,res) =>{
//     products.find().populate("category").then(data =>{
//         res.status(200).send({data,status: 200})
//     })
// }