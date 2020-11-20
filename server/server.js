const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const Score = require('./calculator');

app.use(express.static('../client/dist'));
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log('Serving up now at '+ JSON.stringify(PORT))
});



var player = new Score();//can remove this later on

app.post('/start', (req, res) => {
  var name = req.body.name;
  player = new Score();
  player.name = name;

  res.send('responding from server');
})


app.post('/roll', (req, res) => {

  var score = req.body.roll;
  score = parseInt(score);
  player.calculateScore(score);

    res.send(player);

})

