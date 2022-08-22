const product = require('./../../model/product');

exports.getProductDetails = (req, res) => {
    const productId = req.params.id;
    product.findById(productId).exec((err, data) => {
        if(err) throw err;
        res.render("admin/edit_product", {data});
    })
    // res.send("Hello")
}

//upadte product
exports.updateProductDetails = (req,res) => {
    const productId = req.params.id;
    if (!req.body.name || !req.body.price || !req.body.size || !req.body.discription){
        res.status(422)
        res.redirect(`/admin/edit-product${productId}`)
        return;

    
    }
    else {
        product.findByIdAndUpdate(productId,{
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            discription: req.body.discription
        }).exec((err,data) => {
            if(err) {
                throw err
            } else {
                res.status(200)
                res.redirect('/admin/edit_product')
            }
        })

    }


}

