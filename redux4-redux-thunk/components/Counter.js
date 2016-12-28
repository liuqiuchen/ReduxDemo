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

Counter.propTypes = {
	value: React.PropTypes.number,
	onIncrement: React.PropTypes.func.isRequired,
	onDecrement: React.PropTypes.func.isRequired
};

export default Counter;