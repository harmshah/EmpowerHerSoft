const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

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

