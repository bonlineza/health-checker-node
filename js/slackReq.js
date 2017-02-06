const slack = require('../secrets.json');
const axios = require('axios');

const slackReq = function (url, message, color) {
	axios.post(slack.webhook, {
		text: message,
		channel: slack.channel,
		username: slack.username,
		color: color
	}).then(function() {}, function(err) {
		console.log(err);
	});
};

module.exports = slackReq
