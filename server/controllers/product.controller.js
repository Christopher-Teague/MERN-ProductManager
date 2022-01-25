
// const { req, res } = require('express');
const { Product } = require('../models/product.model');


module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

////////// req = request | res = response \\\\\\\\\\

/////  CREATE \\\\\

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

///// RETRIEVE \\\\\

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: "Error! no products for you!", error: err }));
};

module.exports.findOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.json({ message: "Error! no products for you!", error: err }));
}

///// UPDATE \\\\\

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id} , req.body,{new: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({ message: "Error! no product for you!", error: err }));
}

        ///// DELETE \\\\\

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(delProduct => res.json(delProduct))
    .catch(err => res.json({ message: "Error! no product for you!", error: err }));
}