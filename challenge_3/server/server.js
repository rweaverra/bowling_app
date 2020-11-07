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

app.post('/start', (req, res) => {
  var name = req.body.name;
  var player = new Score(name);

  console.log('start received name', name);

  res.send('responding from server');
})


app.post('/roll', (req, res) => {

  console.log(req.body);
  var score = req.body.roll;
  score = parseInt(score);
  let result = player.calculateScore(score);
  console.log(result);


  // console.log(result);
    res.send(result);

})
