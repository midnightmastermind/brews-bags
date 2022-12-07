const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const RoundSchema = new Schema({
		id: {type: Number},
    game_id: {type: Number},
    score_a: {type: Number},
    score_b: {type: Number},
    round_number: {type: Number}
})

// BlockSchema.post('findOneAndUpdate', function(doc, next) {
//   recursive_reference(this._update, "children")
//   console.log(this._update["children"]);
//   next();
// });
//create model
const Round = mongoose.model('Round', RoundSchema, 'round');


module.exports = Round;