const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Name is Required"],
        minlength: [2, "Name too short"]
    },
    price:{
        type: Number,
        required: [true, "Price is Required"]
    },
    discription:{
        type: String,
        required: [true, "Discription is Required"],
        maxlength: [255, "Discription is too long"]
    }
}, {timestamps: true})


const Product = mongoose.model('Product', ProductSchema)
module.exports = Product