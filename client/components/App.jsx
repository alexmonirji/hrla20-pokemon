import React from 'react';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);

		let context = this;

		this.state = {
			score: 0,
			name: ''
		};

		axios.get('/score')
		.then((score) => {
			context.setState({
				score: score.data
			});
		})
		.catch(() => {
			alert('Something went wrong here!');
		});

		this.change = this.change.bind(this);
		this.guess = this.guess.bind(this);
	}

	change(e) {
		this.setState({
			name: e.target.value
		});
	}

	guess(name) {
		let context = this;
		
		axios.post('/up')
		.then(() => {
			context.setState({
				score: this.state.score + 1
			});
		})
		.catch(() => {
			alert('Something went wrong here!');
		});
	}

	render() {
		return (
			<div>
				<form>
					Who's that Pokémon?
					<input
						type="text"
						onChange={this.change}
					></input>
				</form>
				<button
					onClick={() => {
						this.guess(this.state.name);
					}}
				>Guess</button>
				<p>Score: {this.state.score}</p>
				<a href="/logout">Logout</a>
			</div>
		);
	}
}

export default App;