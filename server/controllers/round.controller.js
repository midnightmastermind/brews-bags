const User = require('../models/user.model');
const express = require("express");
const mongoose = require('mongoose');
// Display user of all user.
exports.user = function(req, res) {
    User.find().sort(('-date'))
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
    //res.send(user);
};

// Display detail page for a specific user.
exports.user_detail = function(req, res) {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display user create form on GET.
exports.user_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: user create GET');
};

// Handle user create on POST.
exports.user_create_post = function(req, res) {
    const newUser = new User({
        ...req.body.element
    });
     newUser.save().then(
         user =>User.findById(user._id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err)));
};

// Display user delete form on GET.
exports.user_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete GET');
};

// Handle user delete on POST.
exports.user_delete_post = function(req, res) {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display user update form on GET.
exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: user update GET');
};

// Handle user update on POST.
exports.user_update_post = function(req, res) {
    User.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {...req.body}, {new: true})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Handle user update on POST.
exports.user_update = function(req, res) {
    const updatedUser = req.body;
    res.status(200);
};