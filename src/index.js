import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rootcontainer from './Rootcontainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Rootcontainer />, document.getElementById('root'));
registerServiceWorker();
