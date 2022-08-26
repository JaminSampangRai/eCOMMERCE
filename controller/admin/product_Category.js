const productsCategory = require('./../../model/product_Category')

//Product Category
exports.getProductCategory = (req,res) => {
    res.render("admin/category")
}


// Get all categories 

exports.getProductCategory = (req, res) => {
    productsCategory.find().then(data => {
        // res.status(200).send({data,status:200})
        res.render("admin/category")
        // res.send({data})

    })
}

//add category to database
exports.postProductcategory = (req, res) =>{
    console.log(req.body);
    if (!req.body.category || !req.body.subCategory) {
        res.status(200).send({message: "empty fields", status: 422})
    } else {
        productsCategory.create({
            ...req.body
        }).then ((data)=> {
            res.status(200).send({data, message: "data added successfully",status: 201})
        }).catch((err)=>{
            res.status(400).send({message: err.message, status:400})
        })
    }

}

// Get all categories 

exports.getAllProductCategory = (req, res) => {
    productsCategory.find().then(data => {
        res.status(200).send({data,status:200})
    })
}


// API for product and category detail

// exports.getProductwithcategory = (req,res) =>{
//     products.find().populate("category").then(data =>{
//         res.status(200).send({data,status: 200})
//     })
// }