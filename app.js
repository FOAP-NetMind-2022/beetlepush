require('dotenv').config();

//MONGOOSE
const mongoose = require("mongoose");

const { Schema } = mongoose;

const stats = new Schema({
  numExercise: Number,
  correct: Boolean,
  incorrectCount: Number,
}, {timestamps: true});

const StatsData = mongoose.model("stats", stats);

const { MONGO_USER, MONGO_PWD, MONGO_HOST, MONGO_DB } = process.env;




//EXPRESS
const express = require("express");
const app = express();

//PATH
const path = require("path");
const { timeStamp } = require('console');

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
    incorrectCount: req.body.wrongCount
  });
  // JSON.parse(localStorage.progress).guessHistory[currentLevel].incorrectCount

  await data.save();
  res.send("ok");
  console.log(req.body);

});

app.get("/getstats", async (req, res) => {

  let records = StatsData.aggregate([{ $group: { _id: "$numExercise", avg_val: { $avg: "$incorrectCount" }, max_val: { $max: "$incorrectCount" }, } }]);
  
  

  let averageAll = [];
  for await (const doc of records) {
    averageAll.push(doc);
  }
  

  let levelsArray = averageAll.map( level=> level._id);
  let maxArrayValue = averageAll.map( level=> level.max_val);
  let avgArray = averageAll.map(level => level.avg_val);
  console.log("esto es el nivel",levelsArray, "esto es la media", avgArray, "el max: ", maxArrayValue );
  //Hay que usar el .map para transformar los datos para que el plotly lo pueda interpretar. 
  //res.send(averageAll)
  // console.log((await records).find())
  res.render("stats.ejs", { 
   levelsArray,
   avgArray

  })
})

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



// get collection from database mongoDB





connectDB();

