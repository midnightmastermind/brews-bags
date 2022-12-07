const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const GameSchema = new Schema({
		id: {type: Number},
    team_a: {type: Number},
    team_b: {type: Number},
    court: {type: String},
    player_stats: {type: Array},
})

// BlockSchema.post('findOneAndUpdate', function(doc, next) {
//   recursive_reference(this._update, "children")
//   console.log(this._update["children"]);
//   next();
// });
//create model
const Game = mongoose.model('Game', GameSchema, 'game');


module.exports = Game;