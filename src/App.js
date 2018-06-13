import React, { Component } from 'react';
import Box from './components/box'

const api_address = "https://somewhere.com"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newCounter: {
				name: "",
				initialCount: 0
			},
			username: "John",
			otherstuff: "stuff"
		}
	}

	handleChange = (event) => {
		// this makes a copy of the newCounter section of state
		let {newCounter} = this.state

		let newValue = event.target.value

		newCounter.name = newValue

		this.setState({newCounter: newCounter})
	}

	render() {
		return (
			<div>
				<div>
					<h3>Create A New Counter</h3>
					<input
						type="text"
						name="counterName"
						placeholder="Enter a name for your new counter"
						onChange={this.handleChange}
					/>
				</div>
				<Box counterName={this.state.newCounter.name} />
			</div>
		);
	}
}

export default App;
