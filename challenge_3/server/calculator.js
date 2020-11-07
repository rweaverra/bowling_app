
  const score = {
  frame: 0,
  currentScore: 0,
  result: [],
  frameScore: [],
  totalScore: 0,
  frameRolls: 0

  }

  const calculateScore = (roll) => {
  //start with button click and simple add and frame.
  //if first roll
  if(score.frameRolls === 0) {
    //if strike
    if(roll === 10) {
      score.result[score.frame] === 'x';
      score.frame = score.frame + 1;
      //frameScore[counter] = 10 + result[counter + 1] + result[counter + 2]
      //do a running total function

    }
  //if not strike
    if(roll < 10) {
      score.currentScore = roll;
      score.frameRolls = score.frameRolls + 1;



    }
     //if 2nd roll
  } else {
     //if two rolls under 10
     if(roll + score.result < 10) {
       //add result
       score.result[score.frame] = score.result + roll;
       //set current frame score
       score.frameScore[score.frame] = score.result;
       //add running total - probably a function to check for strikes on previous results  <<<<<<<<<<<<<<<<
       //go to next frame
       score.frame = score.frame + 1;
       //reset frame rolls
       score.frameRolls = 0;
     } else {
        //if spare

        //add result as / to indicate spare
        score.result[score.frame] = '/';
       //set current frame score
       //add running total - probably a function to check for strikes on previous results
       //go to next frame
       score.frame = score.frame + 1;
       //reset frame rolls
       score.frameRolls = 0;
     }
  }

  console.log(score);
    return score;

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