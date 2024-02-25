import React from 'react';
import "./history.css"

function History({ history }) {

  return (
    <ul>
      {Object.values(history).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default History;
