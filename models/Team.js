const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamName: {
    type: String,
    required: true,
    unique: true
  },
  numOfTeammates : {
    type: Number,
    required: true
  },
  color: {
    type: [String],
    required: true
  },
  mascot: {
    type: String,
    required: true,
    unique: true
  }
});

const Team = mongoose.model('Team', teamSchema)

module.exports = Team;