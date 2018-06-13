import React, {Component} from 'react'

class Box extends Component {

	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	handleIncrement = () => {
		console.log(this);
		this.setState({count: this.state.count+1})
	}

	handleDecrement = () => {
		this.setState({count: this.state.count-1})
	}

	render () {
		return (
			<div>
				<h3>{this.props.counterName}</h3>
				<div className="number">
					{this.state.count}
				</div>
				<button onClick={this.handleIncrement}>Increment</button>
				<button onClick={this.handleDecrement}>Decrement</button>
			</div>
		)
	}
}

export default Box
