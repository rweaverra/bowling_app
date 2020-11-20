import React, { useState } from 'react';
import { postScore } from './../../lib/routes.js';
import PlayArea from './PlayArea.jsx';

function Scoring() {
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
          console.log('error')
        } else {
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
      <div>
        <div>currentscore{currentScore}</div>
        <div>frame rolls out of 2: {frameRolls}</div>
        <div>Frame: {frame}</div>
        <div>result: {result}</div>
        <div>Frame Score: {frameScore}</div>
        <div>Total Score: {totalScore}</div>
        <div>Game Over: {gameOver ? "gameOver" : "play On"}</div>
      </div>
        <PlayArea rollBall={rollBall} />
    </div>
  )
}

export default Scoring;