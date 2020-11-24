import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Pins({ rollBall, frameRolls }) {
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


function toggleHide(value) {
  var copy = JSON.parse(JSON.stringify(state))


  if(frameRolls > 0) {
    //reset pins
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

  if(value === 10) {
    for(var key2 in copy) {
      copy[key2] = true;
    }
   alert("strike!")//modal strike probably need state true false for strike modal can put modal inside playArea
  }//else if value === highest value and frame rolls === 1 then show spare modal

  //else show open modal and calcuate score
  setState(copy);

  }

}

  return (
   <Container>
      <div className="playArea">
        <div className="middleBox">
          <Row className="forthRow">
          <button className={state.showButton7 ? "button7" : "ghosted"}
              onClick={ () => {
              toggleHide(7);
              rollBall('7');
            }}>7</button>

             <button className={state.showButton8 ? "button8" : "ghosted"}
              onClick={ () => {
              toggleHide(8);
              rollBall('8');
            }}>8</button>

             <button className={state.showButton9 ? "button9" : "ghosted"}
              onClick={ () => {
              toggleHide(9);
              rollBall('9');
            }}>9</button>

             <button className={state.showButton10 ? "button10" : "ghosted"}
              onClick={ () => {
              toggleHide(10);
              rollBall('10');
            }}>10</button>
          </Row>
          <Row className="thirdRow">
          <button className={state.showButton4 ? "button4" : "ghosted"}
              onClick={ () => {
              toggleHide(4);
              rollBall('4');
            }}>4</button>

           <button className={state.showButton5 ? "button5" : "ghosted"}
              onClick={ () => {
              toggleHide(5);
              rollBall('5');
            }}>5</button>

            <button className={state.showButton6 ? "button6" : "ghosted"}
              onClick={ () => {
              toggleHide(6);
              rollBall('6');
            }}>6</button>
          </Row>
          <Row className="secondRow">
          <button className={state.showButton2 ? "button2" : "ghosted"}
              onClick={ () => {
              toggleHide(2);
              rollBall('2');
            }}>2</button>

            <button className={state.showButton3 ? "button3" : "ghosted"}
              onClick={ () => {
              toggleHide(3);
              rollBall('3');
            }}>3</button>
          </Row>
          <Row className="firstRow">
            <button className={state.showButton1 ? "button1" : "ghosted"}
            onClick={ () => {
            toggleHide(1);
            rollBall('1');
            }}
            >1</button>
          </Row>

          </div>
      </div>

          </Container>



  )
}


export default Pins;