import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import Challenge from './Challenge';
import challenges from '../challenges.json';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  var index = 0;
  ReactDOM.render(<Challenge
    challengeIndex={index}
    challenge={challenges[index]} />, div);
});

it('to correctly update answers matrix', () => {
  var index = 0;
  const wrapper = shallow(<Challenge challengeIndex={index} challenge={challenges[index]} />)

  wrapper.instance().setToggle(2,1)
  expect(wrapper.instance().state.answers).toEqual([0,0,1]);
  wrapper.instance().setToggle(2,0)
  expect(wrapper.instance().state.answers).toEqual([0,0,0]);
})
