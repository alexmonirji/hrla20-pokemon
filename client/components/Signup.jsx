import React from 'react';
import axios from 'axios';
import Login from './Login.jsx';

class Signup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.changeUsername = this.changeUsername.bind(this);
		this.changePassword = this.changePassword.bind(this);
	}

	changeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	changePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	signup(username, password) {
		const context = this;

		axios.post('/signup', {
			username: username,
			password: password
		})
		.then(() => {
			window.location.href = '/login';
		})
		.catch((err) => {
			alert('Username already taken!');
		});
	}

	render() {
		return (
			<div>
				<form>
					Username:<br/>
					<input type="text" onChange={this.changeUsername}></input><br/>
					Password:<br/>
					<input type="password" onChange={this.changePassword}></input><br/>
				</form>
				<button
					onClick={() =>
						this.signup(this.state.username, this.state.password)
					}
				>Sign Up</button><br/>
				<a href="/login">Sign in</a>
			</div>
		);
	}
}

export default Signup;