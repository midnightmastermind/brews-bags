const Service = require('../models/service.model');
const express = require("express");
const mongoose = require('mongoose');
// Display service of all service.
exports.service = function(req, res) {
    Service.find().sort(('-date'))
        .then(service => res.json(service))
        .catch(err => res.status(400).json('Error: ' + err));
    //res.send(service);
};

// Display detail page for a specific service.
exports.service_detail = function(req, res) {
    Service.findById(req.params.id)
        .then(service => res.json(service))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display service create form on GET.
exports.service_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: service create GET');
};

// Handle service create on POST.
exports.service_create_post = function(req, res) {
    const newService = new Service({
        ...req.body.element
    });
     newService.save().then(
         service =>Service.findById(service._id)
        .then(service => res.json(service))
        .catch(err => res.status(400).json('Error: ' + err)));
};

// Display service delete form on GET.
exports.service_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: service delete GET');
};

// Handle service delete on POST.
exports.service_delete_post = function(req, res) {
    Service.findByIdAndDelete(req.params.id)
        .then(() => res.json('Service deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Display service update form on GET.
exports.service_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: service update GET');
};

// Handle service update on POST.
exports.service_update_post = function(req, res) {
    Service.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {...req.body}, {new: true})
        .then(service => res.json(service))
        .catch(err => res.status(400).json('Error: ' + err));
};

// Handle service update on POST.
exports.service_update = function(req, res) {
    const updatedService = req.body;
    res.status(200);
};