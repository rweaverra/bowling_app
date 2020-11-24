import React from 'react';
import Table from 'react-bootstrap/Table';

function ScoreTable({ result, frameScore, totalScore }) {

  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th></th>
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


  )
}

export default ScoreTable;