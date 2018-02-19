const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const util = require('../helpers/util.js');
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

app.listen(3000, () => {
	console.log('Listening on port 3000.');
});