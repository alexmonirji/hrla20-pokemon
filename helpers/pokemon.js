const config = require('../config.js');
const axios = require('axios');

module.exports = (id) => {
	return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}