import React, { useState } from 'react';
import Pins from './Pins.jsx';
import StrikeModal from './StrikeModal.jsx';


function PlayArea({ rollBall, frameRolls, currentScore, gameOver }) {
  const [modalShow, setModalShow] = useState(false);
  const [isStrike, setIsStrike] = useState(false);
  const [state, setState] = useState({
    showButton1: true,
    showButton2: true,
    showButton3: true,
    showButton4: true,
    showButton5: true,
    showButton6: true,
    showButton7: true,
    showButton8: true,
    showButton9: true,
    showButton10: true
  })



  function showStrikeSpareModal(value, copy) {
    setIsStrike(false)

   if (value === 10) {
      for(var key2 in copy) {
        copy[key2] = true;
      }
     setIsStrike(true);
     setModalShow(true);
    } else if(frameRolls > 0 && value === (10 - currentScore)) {
      setModalShow(true);
    }
  }

  function toggleHide(value) {
    var copy = JSON.parse(JSON.stringify(state))

     if (frameRolls > 0) {
      showStrikeSpareModal(value, copy);
      for(var key1 in copy) {
        copy[key1] = true;
      }
      setState(copy);
    } else {
        for(let i = 11 - value; i <= 10; i++) {
          for (var key in copy) {
            if(key.indexOf(i) > -1) {
              copy[key] = false;
            }
          }
        }
        showStrikeSpareModal(value, copy);
        setState(copy);
    }

  }

  return (
    <div  className="board">
      <StrikeModal
        show={modalShow}
        isStrike={isStrike}
        onHide={() => {
          setModalShow(false)
          }}
      />

      <Pins
        rollBall={rollBall}
        frameRolls={frameRolls}
        state={state}
        toggleHide={toggleHide}
        />
    </div>
  )
}

export default PlayArea;