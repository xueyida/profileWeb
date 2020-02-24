import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({ adapter: new Adapter() })


describe('snapshot', () => {
  it('snapshot', () => {
    const wrapRender = render(<App />);
    expect(
      wrapRender
    ).toMatchSnapshot();
  })
})

