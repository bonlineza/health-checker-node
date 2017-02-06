const req = require('./js/makeReq.js');
const slackit = require('./js/slackReq.js');

// success / failed functions
function success() {
	console.log('all good!');
  repeater(success, error);
}

function error(payload) {
	console.warn('fuck...');
	slackit('Health check failed on server!', 'danger');
  repeater(success, error);
}

req(success, error);

// repeating function
function repeater(fnS, fnE) {
	setTimeout(function() {
		req(fnS, fnE);
	}, 60000);
}

