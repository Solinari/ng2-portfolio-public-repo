const path = require('path');
const express = require('express');
const app = express();

// redirect to https if req uses protocol other than https
const forceSSL = fucntion() {
	return function(req, res, next) {
		if (req.headers['x-forwarded-proto'] !== 'https') {
			return res-redirect(['https://', req.get('Host'), req.url].join(''));
		}
		next();
	}
}

// instruct to use this middleware
app.use(forceSSL());

// serve static files in dist directory
app.use(express.static(__dirname + '/dist'));

// for all GET req, send back index.html so PathLocationStrategy can be used
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// start by listening on default port
app.listen(process.env.PORT || 8080);