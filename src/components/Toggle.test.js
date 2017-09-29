import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Toggle
    key={0}
    challengeIndex={0}
    toggleIndex={0}
    answer={1}
    options={['a','b']}
    setToggle={()=>{}}
    textColor={'red'}/>, div);
});
