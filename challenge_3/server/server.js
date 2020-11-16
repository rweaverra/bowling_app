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



var player = new Score();

app.post('/start', (req, res) => {
  var name = req.body.name;
  console.log('start received name', name);
  player.name = name;
  console.log('player now global', player);
  res.send('responding from server');
})


app.post('/roll', (req, res) => {

  console.log('inside server roll', req.body);
  var score = req.body.roll;
  score = parseInt(score);
  player.calculateScore(score);
   console.log('player show see frame change', player);

    res.send(player);

})

