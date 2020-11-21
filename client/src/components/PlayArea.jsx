import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function PlayArea({ rollBall }) {
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

//on click
// disapear number(end up disapearing 10 minus number, all of the numbers)
function toggleHide(name, value) {
  var copy = JSON.parse(JSON.stringify(state))
  console.log('value', value);
  for(let i = 11 - value; i <= 10; i++) {
    console.log('i', i);
      for (var key in copy) {
        if(key.indexOf(i) > -1) {
          console.log('eat cheese')
          //its only setting state for the last iterated index. I need to figure out a way to set state for all of them!!!!
        copy[key] = false;
        }
      }
  }
  setState(copy);
console.log('state', state);


}

  return (
   <Container>
      <div className="playArea">
        <div className="middleBox">
          <Row className="forthRow">
          <button className={state.showButton7 ? "button7" : "ghosted"}
              onClick={ () => {
              toggleHide("showButton7", 7);
              rollBall('7');
            }}>7</button>

             <button className={state.showButton8 ? "button8" : "ghosted"}
              onClick={ () => {
              toggleHide("showButton8", 8);
              rollBall('8');
            }}>8</button>

             <button className={state.showButton9 ? "button9" : "ghosted"}
              onClick={ () => {
              toggleHide("showButton9", 9);
              rollBall('9');
            }}>9</button>

             <button className={state.showButton10 ? "button10" : "ghosted"}
              onClick={ () => {
              toggleHide("showButton10", 10);
              rollBall('10');
            }}>10</button>
          </Row>
          <Row className="thirdRow">
          <button className={state.showButton4 ? "button4" : "ghosted"}
              onClick={ () => {
              toggleHide("showButton4", 4);
              rollBall('4');
            }}>4</button>

           <button className={state.showButton5 ? "button5" : "ghosted"}
              onClick={ () => {
              toggleHide("showButton5", 5);
              rollBall('5');
            }}>5</button>

            <button className={state.showButton6 ? "button6" : "ghosted"}
              onClick={ () => {
              toggleHide("showButton6", 6);
              rollBall('6');
            }}>6</button>
          </Row>
          <Row className="secondRow">
          <button className={state.showButton2 ? "button2" : "ghosted"}
              onClick={ () => {
              toggleHide("showButton2", 2);
              rollBall('2');
            }}>2</button>

            <button className={state.showButton3 ? "button3" : "ghosted"}
              onClick={ () => {
              toggleHide("showButton3", 3);
              rollBall('3');
            }}>3</button>
          </Row>
          <Row className="firstRow">
            <button className={state.showButton1 ? "button1" : "ghosted"}
            onClick={ () => {
            toggleHide("showButton1", 1);
            rollBall('1');
            }}
            >1</button>
          </Row>

          </div>
      </div>

          </Container>



  )
}

export default PlayArea;