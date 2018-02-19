const path = require('path');

module.exports = {
	checkUser: (req, res, next) => {
		if (req.session.user) {
			return next();
		}
		
		return res.redirect('/login');
	}
};