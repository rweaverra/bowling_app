
  const score = {
  frame: 0,
  currentScore: 0,
  result: [],
  frameScore: [],
  totalScore: 0,
  frameRolls: 0

  }

  const totalScore = () => {
    let sum = 0;
    for (var i = 0; i < score.frameScore.length; i++) {
      sum += score.frameScore[i];
    }
    return score.totalScore = sum;
  }

  const calculateFrameScore = () => {
    //if result[i] === /
      //check to see the next two throws and see what the score was
      //could be a strike, a spare, or under 10
      // could be two frames or one frame down the line.
     const spareHelper = (i) => {
      //check next result and then add it to current frame score
        if(score.result[i + 1] === undefined) {
          return 0;
        }
        if(score.result[i + 1].indexOf('x') > -1 || score.result[i + 1].indexOf('/') > -1) {
          return 10;
        } else {
          let total = parseInt(score.result[i + 1][0]);
          return total;
        }
     };


       //strike helper maybe

       for(var i = 0; i < score.result.length; i++) {
        //check strike

        //check spare
         if(score.result[i].indexOf('/') > -1) {
           score.frameScore[i] = 10 + spareHelper(i);
         } else if(score.result[i].indexOf('x') > -1){
           score.frameScore[i] = 10 + spareHelper(i) + spareHelper(i+1);


         }else {
            //else add score
           score.frameScore[i] = parseInt(score.result[i][0]) + parseInt(score.result[i][0])
         }
       }
  }

  const calculateScore = (roll) => {
  //start with button click and simple add and frame.
  //if first roll
  if(score.frameRolls === 0) {
    //if strike
    if(roll === 10) {
      score.result[score.frame] = 'x';
      score.frame = score.frame + 1;
      //frameScore[counter] = 10 + result[counter + 1] + result[counter + 2]
      //do a running total function

    }
  //if not strike
    if(roll < 10) {
      score.currentScore = roll;
      score.result[score.frame] = roll.toString();
      score.frameRolls = score.frameRolls + 1;



    }
     //if 2nd roll
  } else {
     //if two rolls under 10
     if(roll + score.currentScore < 10) {
       //add result
       score.result[score.frame] = score.currentScore + roll.toString();
       //set current frame score
       //add running total - probably a function to check for strikes on previous results  <<<<<<<<<<<<<<<<
       //go to next frame
       score.frame = score.frame + 1;
       //reset frame rolls
       score.frameRolls = 0;
       calculateFrameScore();
       totalScore();

     } else {
        //if spare

        //add result as / to indicate spare
        score.result[score.frame] = score.result[score.frame] + '/';
       //set current frame score
       //add running total - probably a function to check for strikes on previous results
       //go to next frame
       score.frame = score.frame + 1;
       //reset frame rolls
       score.frameRolls = 0;
       calculateFrameScore();
       totalScore();
     }
  }

  console.log(score);
    return score;

  }



module.exports = calculateScore;