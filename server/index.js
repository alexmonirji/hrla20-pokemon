const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const util = require('../helpers/util.js');
const db = require('../database/index.js');
const app = express();

app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'charizard'
}));

app.get('/', util.checkUser, (req, res) => {
	res.sendFile(path.join(__dirname, '../app.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '../login.html'));
});

app.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, '../signup.html'));
});

app.post('/signup', (req, res) => {
	db.signup(req.body.username, req.body.password)
	.then(() => {
		res.sendStatus(200);
	})
	.catch(() => {
		res.sendStatus(500);
	});
});

app.post('/login', (req, res) => {
	db.login(req.body.username, req.body.password)
	.then((data) => {
		if (data) {
			req.session.regenerate((err) => {
				if (err) {
					res.sendStatus(500);
				} else {
					req.session.user = req.body.username;
					res.sendStatus(200);
				}
			});
		} else {
			res.sendStatus(500);
		}
	})
	.catch(() => {
		res.sendStatus(500);
	});
});

app.get('/logout', util.checkUser, (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.redirect('/');
		}
	});
});

app.listen(3000, () => {
	console.log('Listening on port 3000.');
});