const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
		id: {type: Number},
    name: {type: String},
    email: {type: String},
    image: {type: String},
    password: {type: String}
})

// BlockSchema.post('findOneAndUpdate', function(doc, next) {
//   recursive_reference(this._update, "children")
//   console.log(this._update["children"]);
//   next();
// });
//create model
const User = mongoose.model('User', UserSchema, 'user');


module.exports = User;