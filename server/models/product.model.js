const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ProductSchema = new Schema({
    name: {type: String},
})

// BlockSchema.post('findOneAndUpdate', function(doc, next) {
//   recursive_reference(this._update, "children")
//   console.log(this._update["children"]);
//   next();
// });
//create model
const Product = mongoose.model('Product', ProductSchema, 'product');


module.exports = Product;