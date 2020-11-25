import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import StartGameModal from './StartGameModal.jsx'

function ScoreTable({ result, frameScore, totalScore }) {
   const [playerName, setPlayerName] = useState('')
   const [playerAdded, setPlayerAdded] = useState(false)

  const submitName = (name) => {
    setPlayerName(name);
    setPlayerAdded(true);
    console.log('inside App submitName', playerName);
  }

  return (
    <div>
    <StartGameModal
      submitName={submitName}
    />
    <Table striped bordered hover className="table1">
  <thead>
    <tr>
      <th className={playerAdded ? "nameCell" : 'nothing'}>{playerName}</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th className="totalScoreHeader">Total Score</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>result</td>
      <td>{result[0]}</td>
      <td>{result[1]}</td>
      <td>{result[2]}</td>
      <td className="totalScoreNumber" rowSpan="2">{totalScore}</td>

    </tr>
    <tr>
      <td>frame Score</td>
      <td>{frameScore[0]}</td>
      <td>{frameScore[1]}</td>
      <td>{frameScore[2]}</td>
    </tr>
  </tbody>
</Table>
</div>

  )
}

export default ScoreTable;