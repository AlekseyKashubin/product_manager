const Product = require("../models/product.model")

module.exports = {
    // say hello
    hello: (req, res) => {
        res.json({ message: "Hello World" });
    },

    // get all
    allProducts: (req, res) => {
        Product.find()
            .then(products => {
                res.json(products)
            })
            .catch((err) => {
                res.json(err)
            })
    },


    // get one 
    oneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(getOneProduct => {
                res.json(getOneProduct)
            })
            .catch((err) => {
                res.json(err)
            })
    },



    // add new user
    addProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                res.json(newProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },



    // update one 
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true, runValidators: true }
        )
            .then(updatedProduct => {
                res.json(updatedProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },


    // delete one 
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }
}