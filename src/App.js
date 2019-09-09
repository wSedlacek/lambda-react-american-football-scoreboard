import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  const homeHook = useState(0);
  const awayHook = useState(0);

  const scoreHandler = (hook, add) => {
    hook[1](hook[0] + add);
  };

  return (
    <div className='container'>
      <section className='scoreboard'>
        <div className='topRow'>
          <div className='home'>
            <h2 className='home__name'>Lions</h2>

            <div className='home__score'>{homeHook[0]}</div>
          </div>
          <div className='timer'>00:03</div>
          <div className='away'>
            <h2 className='away__name'>Tigers</h2>
            <div className='away__score'>{awayHook[0]}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className='buttons'>
        <div className='homeButtons'>
          <button className='homeButtons__touchdown' onClick={() => scoreHandler(homeHook, 7)}>
            Home Touchdown
          </button>
          <button className='homeButtons__fieldGoal' onClick={() => scoreHandler(homeHook, 3)}>
            Home Field Goal
          </button>
        </div>
        <div className='awayButtons'>
          <button className='awayButtons__touchdown' onClick={() => scoreHandler(awayHook, 7)}>
            Away Touchdown
          </button>
          <button className='awayButtons__fieldGoal' onClick={() => scoreHandler(awayHook, 3)}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
