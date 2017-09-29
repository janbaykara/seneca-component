import React, { Component } from 'react';
import './App.css';
import Challenge from './components/Challenge';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      challenges: [{
      	question: 'Ideal conditions for the bacterial growth',
      	toggles: [{
      		options: ['Cold', 'Warm'],
          answer: 0
      	},{
      		options: ['No water', 'Water'],
          answer: 0
      	},{
      		options: ['No food', 'Food'],
          answer: 0
      	}],
        colours: {
          0: [[245,  67,  43], [ 249, 150, 110 ]],
          1: [[245, 121,  48], [ 249, 183, 110 ]],
          2: [[246, 168,  51], [ 250, 220, 111 ]],
          3: [[ 39, 215, 224], [  87, 230, 200 ]]
        }
      }],
      currentChallenge: 0
    }
  }

  challenge = () => {
    return this.state.challenges[this.state.currentChallenge]
  }

  render() {
    return (
		  <Challenge challengeIndex={this.state.currentChallenge} challenge={this.challenge()} />
    );
  }
}
