import React from 'react';
import { Container, Row } from 'react-bootstrap';


function Pins({ rollBall, frameRolls, state, toggleHide }) {



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
            }}>1</button>
          </Row>
        </div>
      </div>
    </Container>



  )
}


export default Pins;