  let frame = 0;
  let currentScore = 0
  let result = [];
  let frameScore = [];
  let totalScore = 0;
  let frameRolls = 0;



  const calculateScore = (roll) => {

  roll = parseInt(roll)
  currentScore += roll;
  console.log('inside calculateScore', currentScore)
    return currentScore;
  }


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

module.exports = calculateScore;