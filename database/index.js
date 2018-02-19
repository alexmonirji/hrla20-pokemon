const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/pokemon');

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
		return bcrypt.hash(password, 10)
		.then((hash) => {
			return Users.create({
				username: username,
				password: hash,
				score: 0
			});
		})
		.catch((err) => {
			reject(err);
		});
	},
	login: (username, password) => {
		return Users.find({ username: username })
		.then((user) => {
			return bcrypt.compare(password, user[0].password);
		})
		.catch(() => {
			console.log('ERROR');
		});
	},
	scoreUp: (username) => {

	},
	scoreDown: (username) => {

	}
};