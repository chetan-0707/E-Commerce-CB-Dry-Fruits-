const mongoose = require("mongoose");

const almondSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
});

const Almond = mongoose.model("almond", almondSchema);

module.exports = Almond;
