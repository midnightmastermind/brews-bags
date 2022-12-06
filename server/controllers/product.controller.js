const Product = require('../models/product.model');
const express = require("express");
const mongoose = require('mongoose');
// Display products of all products.
exports.product = function(req, res) {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
    //res.send(products);
};

// Display detail page for a specific products.
exports.product_detail = function(req, res) {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display products create form on GET.
exports.product_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: products create GET');
};

// Handle products create on POST.
exports.product_create_post = function(req, res) {
    const newProduct = new Product({
        ...req.body.element
    });
     newProduct.save().then(
         product => Product.findById(product._id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err)));
};

// Display products delete form on GET.
exports.product_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: products delete GET');
};

// Handle products delete on POST.
exports.product_delete_post = function(req, res) {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Products deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display products update form on GET.
exports.product_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: products update GET');
};

// Handle products update on POST.
exports.product_update_post = function(req, res) {
    Product.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {...req.body}, {new: true})
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Handle products update on POST.
exports.product_update = function(req, res) {
    const updatedProducts = req.body;
    res.status(200);
};