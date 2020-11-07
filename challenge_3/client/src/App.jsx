import React, { useState } from 'react';
import { postScore } from './../lib/routes.js';

const App = () => {
  const [frame, setFrame] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [result, setResult] = useState([]);
  const [frameScore, setFrameScore] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [frameRolls, setFrameRolls] =  useState(0);
  const [gameOver, setGameOver] = useState(false);


  const rollBall = (event) => {
    //send request to server with button pressed
    var score = event.target.value;
    postScore(score, (err, result) => {
        if(err) {
          console.log(err)
        } else {
          console.log('results.data from server', result.data);
          //set state
          let update = result.data;

          setFrame(update.frame + 1);
          setFrameRolls(update.frameRolls);
          setCurrentScore(update.currentScore);
          setResult(update.result);
          setFrameScore(update.frameScore);
          setTotalScore(update.totalScore);
          setGameOver(update.isOver);
        }
    });

    //receive back info and set the state with it and update state
  }



  return (
    <div>
      currentscore{currentScore}
      <div>frame rolls out of 2: {frameRolls}</div>
      <div>Frame: {frame}</div>
      <div>result: {result}</div>
      <div>Frame Score: {frameScore}</div>
      <div>Total Score: {totalScore}</div>
      <div>Game Over: {gameOver ? "gameOver" : "play On"}</div>
      <div>
        <button onClick={rollBall} value={1}>1</button> <button  onClick={rollBall} value="2">2</button> <button  onClick={rollBall} value="3">3</button>
        <button  onClick={rollBall} value="4">4</button> <button  onClick={rollBall} value="5">5</button> <button  onClick={rollBall} value="6">6</button>
        <button  onClick={rollBall} value="7">7</button> <button  onClick={rollBall} value="8">8</button> <button  onClick={rollBall} value="9">9</button>
        <button  onClick={rollBall} value="10">10</button>
      </div>
    </div>
  );
}

export default App;