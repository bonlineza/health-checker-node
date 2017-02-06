const axios = require('axios');

const makeReq = function (successCb, errorCb) {
	axios.get('https://hicarbyecar.com/health.txt').then(function(response) {
		if (response.data !== 'healthy\n') {
			errorCb(response.data);
		} else {
			successCb();
		}
	}, function(error) {
		errorCb(error);
	});
}

module.exports = makeReq;

