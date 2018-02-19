import React from 'react';
import axios from 'axios';

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
				>Sign Up</button>
			</div>
		);
	}
}

export default Signup;