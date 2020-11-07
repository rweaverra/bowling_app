const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const calculateScore = require('./calculator');

app.use(express.static('../client/dist'));
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log('Serving up now at '+ JSON.stringify(PORT))
});


app.post('/roll', (req, res) => {
  console.log(req.body);
  var score = req.body.roll;
   score = parseInt(score);

   var result = calculateScore(score)
  console.log(result);
    res.send(result);

})
