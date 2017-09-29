import React, { Component } from 'react';
import color from 'color';
import Toggle from './Toggle';

export default class Challenge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: Array(this.props.challenge.toggles.length).fill(0)
    }
  }

  // This could probably be handed off to App's state
  setToggle = (toggleIndex, answerIndex) => {
    this.setState((prevState, props) => {
      let nextState = prevState;
      nextState.answers[toggleIndex] = answerIndex;
      return { answers: nextState.answers }
    })
  }

  outcome = () => {
    let outcome = this.state.answers.reduce((sum,curr)=> sum + curr)
    let gradient = {
      bottom: `rgb(${this.props.challenge.colours[outcome][0].join(',')})`,
      top: `rgb(${this.props.challenge.colours[outcome][1].join(',')})`
    }

    return {
      backgroundColor: `linear-gradient(to top, ${gradient.bottom} 0%, ${gradient.top} 100%)`,
      textColor: color(gradient.bottom).darken(0.15),
      correct: this.props.challenge.toggles.length === outcome
    }
  }

  render() {
    return (
		  <div
        className='shadow-1 center mh3 mt5 w-90 w-50l mw7 br3 pa4 bg-green'
        style={{'background': this.outcome().backgroundColor}}>
				<h1 className='b tc white f4'>{this.props.challenge.question}</h1>
					{this.props.challenge.toggles.map((thisToggle,toggleIndex) =>
						<Toggle
							key={toggleIndex}
							challengeIndex={this.props.challengeIndex}
							toggleIndex={toggleIndex}
              answer={this.state.answers[toggleIndex]}
							options={thisToggle.options}
							setToggle={this.setToggle}
              textColor={this.outcome().textColor} />
					)}
        <div className='b tc f6 white'>The answer is {this.outcome().correct ? 'correct' : 'incorrect'}</div>
			</div>
    );
  }
}
