import React, { useState } from 'react';
import { postScore } from './../../lib/routes.js';
import { startGame } from './../../lib/routes.js';
import PlayArea from './PlayArea.jsx';
import ScoreTable from './ScoreTable.jsx';
import GameOverModal from './GameOverModal.jsx';

function Scoring() {
  const [name, setName] = useState('');
  const [frame, setFrame] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [result, setResult] = useState([]);
  const [frameScore, setFrameScore] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [frameRolls, setFrameRolls] =  useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);


  const resultsAfterRoll = (update) => {
    setName(update.name);
          setFrame(update.frame + 1);
          setFrameRolls(update.frameRolls);
          setCurrentScore(update.currentScore);
          setResult(update.result);
          setFrameScore(update.frameScore);
          setTotalScore(update.totalScore);
          setGameOver(update.isOver);

  }

  const rollBall = (value) => {
    //send request to server with button pressed
    var score = value;
    postScore(score, (err, result) => {
        if(err) {
          console.log('error')
        } else {
          //set state
          let update = result.data;
         console.log('update inside of roll score', update)
         resultsAfterRoll(update);
        }
    });
  }

  const onHide = () => {
    startGame(name, (err, result) => {
      if(err) {
        console.log(err)
      } else {
        resultsAfterRoll(result.data)
}
})
    setGameOver(false);
  }

  const setAnimation = () => {
    setIsAnimated(true);
  }



  return (
    <div>
      <ScoreTable
        result={result}
        frameScore={frameScore}
        totalScore={totalScore}
        setAnimation={setAnimation}


      />
      <div>
        <GameOverModal
          gameOver={gameOver}
          totalScore={totalScore}
          onHide={onHide}
          />
      </div>
        <PlayArea
        frameRolls={frameRolls}
        rollBall={rollBall}
        currentScore={currentScore}
        gameOver={gameOver}
        isAnimated={isAnimated}

        />
    </div>
  )
}

export default Scoring;