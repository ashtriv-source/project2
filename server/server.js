require('./db');
const Outfit = require('./models/Outfit');
const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());


app.get('/outfits', async (req, res) => {
  const allOutfits = await Outfit.find();
  console.log(allOutfits)
  res.json(allOutfits);
});

app.post('/save-outfit', async (req, res) => {
  console.log(req.body)
  try {
    const newOutfit = new Outfit(req.body);
    await newOutfit.save();

    res.send("Outfit saved to database!");
  } catch (err) {
    res.status(500).send("Error saving outfit");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});