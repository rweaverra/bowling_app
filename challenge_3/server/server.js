const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const calculateScore = require('./calculator');
const Score = require('./calculator');

app.use(express.static('../client/dist'));
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log('Serving up now at '+ JSON.stringify(PORT))
});

var player = new Score(); //<<<I think there is an issue where with this variable that keeps getting initiated. I need to figure out how to craete this varaible but let all routes access it.
app.post('/start', (req, res) => {
  var name = req.body.name;
  //how do I save this globally or so other functions can access it.
  console.log('start received name', name);
  player.name = name;
  console.log('player now global', player);
  res.send('responding from server');
})


app.post('/roll', (req, res) => {

  console.log('inside server roll', req.body);
  var score = req.body.roll;
  score = parseInt(score);
  console.log('player is right here', player);
  player.calculateScore(score);



  // console.log(result);
    res.send(player);

})

//forwhatever reason it is not using the calculate score method. either it cant connect to the other page, or some othe reason.