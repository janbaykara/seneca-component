import React from 'react';
import 'tachyons'; // atomic css classes

function Selector(props) {
	return (
		<div
			onClick={() => { props.setToggle(props.toggleIndex, props.answer === 0 ? 1 : 0) }}
			className='b pointer br-pill bg-white o-60 w-50 h-100 pa3 absolute z-1 top-0 shadow-1'
			style={{'left': (props.answer*50)+'%', 'transition': 'left 0.5s ease'}}/>
	)
}

function Options(props) {
	return (
		<div
			style={{'pointerEvents': 'none', 'transition': 'color 0.3s', 'color': props.answer === props.thisOption ? props.textColor : 'white'}}
			className='b w-50 fl pa3 tc relative z-2 f6'>{props.options[props.thisOption]}</div>
		)
}

export default (props) =>
  <div className='ma3 br-pill ba b--white w5 cf relative h center w-100 w-70-ns w-60-l'>
		{/* Selector */}
		<Selector answer={props.answer} setToggle={props.setToggle} toggleIndex={props.toggleIndex} />
		<Options  answer={props.answer} textColor={props.textColor} thisOption={0} options={props.options} />
		<Options  answer={props.answer} textColor={props.textColor} thisOption={1} options={props.options} />
	</div>
