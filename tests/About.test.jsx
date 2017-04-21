import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import About from '../src/views/pages/about';

describe('About Page', () => {
  it('About.js', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
  });
});

it('About Page renders correctly', () => {
  const tree = renderer.create(
    <About />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
