import React from 'react';
import ReactDOM from 'react-dom';
import Rootcontainer from './Rootcontainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rootcontainer />, div);
});
