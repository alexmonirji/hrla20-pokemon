import React from 'react';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);

		let context = this;

		this.state = {
			pokemon: {
				name: '',
				sprites: {
					front_default: ''
				}
			},
			score: 0,
			name: ''
		};

		axios.get('/pokemon')
		.then((data) => {
			axios.get('/score')
			.then((score) => {
				context.setState({
					pokemon: data.data,
					score: score.data
				});
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
		
		if (name.toLowerCase() === this.state.pokemon.name.toLowerCase()) {
			axios.post('/up')
			.then(() => {
				axios.get('/pokemon')
				.then((data) => {
					context.setState({
						pokemon: data.data,
						score: this.state.score + 1,
						name: ''
					});					
				})
			})
			.catch(() => {
				alert('Something went wrong here!');
			});
		} else {
			alert('Try again!');
		}
	}

	skip() {
		let context = this;
		
		axios.post('/down')
		.then(() => {
			axios.get('/pokemon')
			.then((data) => {
				context.setState({
					pokemon: data.data,
					score: this.state.score - 1,
					name: ''
				});
			});
		})
		.catch(() => {
			alert('Something went wrong here!');
		});
	}

	render() {
		return (
			<div>
				<img src={this.state.pokemon.sprites.front_default}/>
				<form>
					Who's that Pokémon?<br/>
					<input
						type="text"
						value={this.state.name}
						onChange={this.change}
					></input>
				</form>
				<button
					onClick={() =>
						this.guess(this.state.name)
					}
				>Guess</button>
				<button
					onClick={() =>
						this.skip()
					}
				>Skip</button>
				<p>Score: {this.state.score}</p>
				<a href="/logout">Logout</a>
			</div>
		);
	}
}

export default App;