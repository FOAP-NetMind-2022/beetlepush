
const mongoose = require('mongoose');
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



const {Schema} = mongoose;

const stats = new Schema({
    numExercise: Number,
    correct: Boolean,
  });

  const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://beetlepush:Muydific1l@cluster0.5w1sd.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};


  const StatsData = mongoose.model("stats", stats);




