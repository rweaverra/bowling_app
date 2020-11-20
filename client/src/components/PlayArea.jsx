import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function PlayArea({ rollBall }) {

  return (
   <Container>
      <div className="playArea">
        <div className="middleBox">
          <Row className="forthRow">
             <button className="button7" onClick={rollBall} value="7">7</button>
             <button className="button8" onClick={rollBall} value="8">8</button>
             <button className="button9" onClick={rollBall} value="9">9</button>
             <button className="button10" onClick={rollBall} value="10">10</button>
          </Row>
          <Row className="thirdRow">
           <button className="button4"  onClick={rollBall} value="4">4</button>
            <button className="button5"  onClick={rollBall} value="5">5</button>
            <button className="button6" onClick={rollBall} value="6">6</button>
          </Row>
          <Row className="secondRow">
            <button className="button2"  onClick={rollBall} value="2">2</button>
            <button className="button3"  onClick={rollBall} value="3">3</button>
          </Row>
          <Row className="firstRow">
            <button className="button1" onClick={rollBall} value="1">1</button>
          </Row>

          </Container>

         {/*

        */}

        </div>
      </div>

  )
}

export default PlayArea;