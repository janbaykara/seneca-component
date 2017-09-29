import React, { Component } from 'react';
import './App.css';
import 'tachyons'; // atomic css classes
import challenges from './challenges.json';
import Challenge from './components/Challenge';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      challenges,
      currentChallenge: 0
    }
  }

  challenge = () => {
    return this.state.challenges[this.state.currentChallenge]
  }

  render() {
    return (
      <div>
  		  <Challenge challengeIndex={this.state.currentChallenge} challenge={this.challenge()} />
        <div className='f7 tc mt4'><span className='black-30'>From @JanBaykara with</span> 💋</div>
      </div>
    );
  }
}
