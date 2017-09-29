import React, { Component } from 'react';
import styled from 'styled-components';
import interpolate from 'color-interpolate';
import Toggle from './Toggle';

const GradientDiv = styled.div`
  position: relative;

  &:before {
    content: '';
    display: block;
    background: linear-gradient(to top, rgba(204,204,204,1) 0%,rgba(255,255,255,1) 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
  }
`

export default class Challenge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: Array(this.props.challenge.toggles.length).fill(0)
    }
  }

  setToggle = (toggleIndex, answerIndex) => {
    this.setState((prevState, props) => {
      let nextState = prevState;
      nextState.answers[toggleIndex] = answerIndex;
      return { answers: nextState.answers }
    })
  }

  outcome = () => {
    let outcome = this.state.answers.reduce((sum,curr)=> sum + curr)
    let outcomePercent = outcome/this.props.challenge.toggles.length;
    // Interpolate module for when we inevitably don't know the
    // number of toggles, and so cannot define each percentage's gradient values
    let colourmapTop = interpolate(this.props.challenge.colours.top);
    let colourmapBottom = interpolate(this.props.challenge.colours.bottom);
    return {
      backgroundColor: `linear-gradient(to top, ${colourmapBottom(outcomePercent)} 0%, ${colourmapTop(outcomePercent)} 100%)`,
      textColor: colourmapBottom(outcomePercent),
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
