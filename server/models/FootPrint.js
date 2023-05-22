const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footprintSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  contents: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
});

const POST = mongoose.model("FootPrint", footprintSchema);
module.exports = { POST };
