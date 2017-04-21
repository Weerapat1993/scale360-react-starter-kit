import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Home from '../src/views/pages/home';

describe('Home Page', () => {
  it('Home.js', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });
});

it('Home Page renders correctly', () => {
  const tree = renderer.create(
    <Home />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
