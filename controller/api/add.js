exports.postMultiple = (req, res) => {
    let multiple = req.body.numberOne * req.body.numberTwo
    res.status(200).send({
        data: multiple
    })

}