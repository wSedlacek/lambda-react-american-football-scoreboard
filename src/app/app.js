import React, { useState } from 'react';
import './app.css';

import ScoreBoard from './components/score-board/score-board.component';
import ScoreButtons from './components/score-buttons/score-buttons.component';

function App() {
  const homeHook = useState(0);
  const awayHook = useState(0);

  return (
    <div className='container'>
      <ScoreBoard homeHook={homeHook} awayHook={awayHook} />
      <section className='buttons'>
        <ScoreButtons text='Home' hook={homeHook} />
        <ScoreButtons text='Away' hook={awayHook} />
      </section>
    </div>
  );
}

export default App;
