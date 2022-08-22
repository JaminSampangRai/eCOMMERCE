const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    discription:{
        type: String,
    },
    image: {
        type: String,
        required: true,

    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    }],

})

module.exports = mongoose.model("Products",productSchema)