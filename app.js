

const express = require('express');

const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));


app.get('/', function(req, res){

    res.sendFile(path.resolve(__dirname, "index.html"));

});

app.listen(3001, ()=>{
    console.log('server operativo')
});

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://beetlepush:Muydific1l@cluster0.5w1sd.mongodb.net/?retryWrites=true&w=majority');

const {Schema} = mongoose;

const stats = new Schema({
    numExercise: Number,
    correct: Boolean,
  });


  const StatsData = mongoose.model("stats", stats);


