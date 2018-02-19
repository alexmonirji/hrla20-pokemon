import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

if (document.getElementById('app')) {
	ReactDOM.render(<App />, document.getElementById('app'));
} else if (document.getElementById('login')) {
	ReactDOM.render(<Login />, document.getElementById('login'));
} else if (document.getElementById('signup')) {
	ReactDOM.render(<Signup />, document.getElementById('signup'));
}