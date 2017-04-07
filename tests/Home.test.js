import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/views/pages/home';

describe('Home Components', () => {
  it('Home.js', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });
});
