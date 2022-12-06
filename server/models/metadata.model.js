const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//create schema
const MetadataSchema = new Schema({
    name: {type: String},
})

//create model
const Metadata = mongoose.model('Metadata', MetadataSchema, 'metadata');

module.exports = Metadata;