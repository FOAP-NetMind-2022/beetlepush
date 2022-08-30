require('dotenv').config();

//MONGOOSE
const mongoose = require("mongoose");
const { Schema } = mongoose;

const stats = new Schema({
    numExercise: Number,
    correct: Boolean,
});

const StatsData = mongoose.model("stats", stats);

const { MONGO_USER, MONGO_PWD, MONGO_HOST, MONGO_DB } = process.env;

//EXPRESS
const express = require("express");
const app = express();

//PATH
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is online.");
  });


app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.post("/statistics", async (req, res) => {
    const data = new StatsData({
      numExercise: req.body.label,
      correct: req.body.action,
    });
  
    await data.save();
    res.send("ok");
    console.log(req.body);
  });

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@${MONGO_HOST}/${MONGO_DB}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`Connected to "${MONGO_DB}" Database.`);
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

connectDB();