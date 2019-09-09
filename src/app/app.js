import React, { useState } from 'react';
import './app.css';

import ScoreBoard from './components/score-board/score-board.component';
import ScoreButtons from './components/score-buttons/score-buttons.component';
import QuaterButton from './components/quater-button/quater-button.component';

const App = () => {
  const homeHook = useState(0);
  const awayHook = useState(0);
  const quaterHook = useState(1);

  return (
    <div className='container'>
      <ScoreBoard homeHook={homeHook} awayHook={awayHook} quaterHook={quaterHook} />
      <section className='buttons'>
        <ScoreButtons text='Home' hook={homeHook} />
        <ScoreButtons text='Away' hook={awayHook} />
        <QuaterButton hook={quaterHook} />
      </section>
    </div>
  );
};

export default App;
