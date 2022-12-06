const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ServiceSchema = new Schema({
    name: {type: String},
})

// BlockSchema.post('findOneAndUpdate', function(doc, next) {
//   recursive_reference(this._update, "children")
//   console.log(this._update["children"]);
//   next();
// });
//create model
const Service = mongoose.model('Service', ServiceSchema, 'service');


module.exports = Service;