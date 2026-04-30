const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  top: String,
  bottom: String,
  shoes: String
});

module.exports = mongoose.model("Outfit", outfitSchema);