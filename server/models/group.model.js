const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const GroupSchema = new Schema({
		id: {type: Number},
    name: {type: String},
    players: {type: Array},
    image: {type: String}
})

// BlockSchema.post('findOneAndUpdate', function(doc, next) {
//   recursive_reference(this._update, "children")
//   console.log(this._update["children"]);
//   next();
// });
//create model
const Group = mongoose.model('Group', GroupSchema, 'group');


module.exports = Group;