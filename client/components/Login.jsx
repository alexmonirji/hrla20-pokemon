import React from 'react';
import axios from 'axios';

class Login extends React.Component {
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

	login(username, password) {
		axios.post('/login', {
			username: username,
			password: password
		})
		.then(() => {
			window.location.href = '/';
		})
		.catch(() => {
			alert('Invalid username or password.');
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
						this.login(this.state.username, this.state.password)
					}
				>Login</button><br/>
				<a href="/signup">Create an account</a>
			</div>
		);
	}
}

export default Login;