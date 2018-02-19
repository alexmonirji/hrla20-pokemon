const mongoose = require('mongoose');
mongoose.connect('localhost:27017/pokemon');

const Users = mongoose.model('Users', {
	username: {
		type: String,
		unique: true,
		required: true,
		dropDups: true
	},
	password: {
		type: String,
		required: true
	},
	score: Number
});

module.exports = {
	signup: (username, password) => {

	},
	login: (username, password) => {

	},
	scoreUp: (username) => {

	},
	scoreDown: (username) => {

	}
};