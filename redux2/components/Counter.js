import React, { Component, PropTypes } from 'React';

class Counter extends Component {
	incrementAsync() {
		alert('test');
	}
	render() {
		const {value, onIncrement, onDecrement} = this.props;
		return (
			<div>
				<p>
					Clicked: {value} times
					{'   '}
					<button onClick={onIncrement}>+</button>
					{'   '}
					<button onClick={onDecrement}>-</button>
					{'   '}
					<button onClick={this.incrementAsync}>test</button>
					{'   '}
				</p>
			</div>
		);
	}
}

export default Counter;