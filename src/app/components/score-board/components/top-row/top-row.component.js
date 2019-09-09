import React from 'react';
import './top-row.style.css';

const TopRow = props => {
  return (
    <div className='topRow'>
      <div className='home'>
        <h2 className='home__name'>Lions</h2>

        <div className='home__score'>{props.homeHook[0]}</div>
      </div>
      <div className='timer'>00:03</div>
      <div className='away'>
        <h2 className='away__name'>Tigers</h2>
        <div className='away__score'>{props.awayHook[0]}</div>
      </div>
    </div>
  );
};

export default TopRow;
