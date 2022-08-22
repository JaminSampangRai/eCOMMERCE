const allProduct= require('./../../model/product')

exports.allProducts = (req, res) => {
    allProduct.find()
    .then(data => {
        res.render('admin/products', {
            data
        })
    })
    .catch(err => {
        console.log(err)
    })
}