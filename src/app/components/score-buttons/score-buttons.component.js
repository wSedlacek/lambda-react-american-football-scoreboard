import React from 'react';
import './score-buttons.style.css';

function ScoreButtons(props) {
  const scoreHandler = add => {
    props.hook[1](props.hook[0] + add);
  };

  return (
    <div className='scoreButtons'>
      <button className='scoreButtons__touchdown' onClick={() => scoreHandler(7)}>
        {props.text} Touchdown
      </button>
      <button className='scoreButtons__fieldGoal' onClick={() => scoreHandler(3)}>
        {props.text} Field Goal
      </button>
    </div>
  );
}

export default ScoreButtons;
