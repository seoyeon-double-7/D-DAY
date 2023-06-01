const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamedataSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  score: {
    type: Array,
    default: [],
  },
  maxScore: {
    type: Number,
  },
  playNum: {
    type: Number,
  },
});

const GameData = mongoose.model("GameData", gamedataSchema);
module.exports = { GameData };
