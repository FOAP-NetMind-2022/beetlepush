const express = require('express');

const app = express();
const path = require('path');



app.get('/', function(req, res){
    app.use(express.static('/js/restaurant.js'));

    res.sendFile(path.resolve(__dirname, "index.html"));

});

app.listen(3001, ()=>{
    console.log('server operativo')
});