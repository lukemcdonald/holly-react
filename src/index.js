import React from 'react';
import ReactDOM from 'react-dom';
import initialize from './assets/js/main.js';

import './assets/css/style.css';
import './assets/css/customize.css';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
initialize();
