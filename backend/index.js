const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//app.use(cors());
// Enable CORS
app.use(cors({ origin: "*" }));
app.use(express.json());


//
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => {
  if (err.code === 'ENOTFOUND') {
    console.error("DNS resolution failed. Please check your MongoDB connection string.");
  } else {
    console.error("MongoDB connection error:", err);
  }
});


// Mongoose Schema
const NominationSchema = new mongoose.Schema({
  yourName: String,
  email: String,
  honoreeName: String,
  relationship: String,
  story: String,
  descriptionWord: String,
  shareConsent: String,
});

const Nomination = mongoose.model("Nomination", NominationSchema);

// POST Route
app.post("/api/wall-of-honor", async (req, res) => {
  try {
    const newNomination = new Nomination(req.body);
    await newNomination.save();
    res.status(200).json({ message: "Nomination saved!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save nomination" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

