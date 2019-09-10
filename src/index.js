import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app/app';

import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();

ReactDOM.render(<App />, document.getElementById('root'));
