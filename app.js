

const mongoose = require('mongoose');
const express = require('express');

const app = express();
const path = require('path');
const { application } = require('express');


app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));

app.use(express.urlencoded({ extended: false }));


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
        await mongoose.connect('mongodb+srv://beetlepush:Muydific1l@cluster0.5w1sd.mongodb.net/stats', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};


  const StatsData = mongoose.model("stats", stats);

app.post('/statistics', async (req, res)=>{

    const data = new StatsData({
        numExercise: req.body.label,
        correct: req.body.action});

        await data.save();
        res.send('ok');
    console.log(req.body);
});

connectDB();


