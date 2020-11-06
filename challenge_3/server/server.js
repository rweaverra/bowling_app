const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('../client/dist'));
app.use(express.json());



app.listen(PORT, () => {
  console.log('Serving up now at '+ JSON.stringify(PORT))
});

//if strike
    //set total score to 10
    //set result to 10(or x)
    //set frame to frame++

    //i need some kind of indicator to show that its score is determined on the next two scores.
      //iterate result
        //if i === x {
          //then framescore[i] = 10 + framescore[i + 1] + framescore[i + 2]

          //helper add function



//start with button click and simple add and frame.

//   var pins = parseInt(event.target.value)
//    setCurrentScore(currentScore + pins);
//    setFrameRolls(frameRolls+1);

//    if(frameRolls === 2) {
//      setCurrentScore = 0;
//     setFrameScore([...frameScore, currentScore]);
//     setFrameRolls(0);
//     setFrame(frame++);
//     setResult([...result, currentScore])
//     setTotalScore(totalScore + currentScore)
// }
// }