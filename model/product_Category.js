const mongoose = require('mongoose')

const productCategory = new mongoose.Schema({
    category: {
        type: String,
        required: true,

    },
    subCategory:{
        type: String,
        required: true,
        
    }
})

module.exports = mongoose.model("Category",productCategory)