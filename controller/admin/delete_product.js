const Product = require('./../../model/product')

exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
    Product.findByIdAndDelete(productId)
        .exec((err, data) => {
            if (err) {
                throw err

            } else {
                res.redirect('/admin/add-product')
                // res.send('Npo')
            }
        })
    // console.log(productId);
}

