const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  top: String,
  bottom: String,
  shoes: String,
  bags: String
});

module.exports = mongoose.model("Outfit", outfitSchema);