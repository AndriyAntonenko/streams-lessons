const http = require('http');
const concat = require('concat-stream');
const through = require('through2');

const server = http.createServer((req, res) => {
	req
	   .pipe(counter())
	   .pipe(concat({ encoding: 'string' }, onBody));

	function counter() {
		let size = 0;
		return through((buf, enc, next) => {
			size += buf.length;
			if (size > 20) {
				res.end('\n======>\nETOOBIG\n<======\n');
				return;
			}
			next(null, buf);
		});
	}

	function onBody(body) {
		if (body) {
			console.log('Data: ', body.toString());
			console.log('Length: ', body.length);
		}
		res.end('\n======>\nOK\n<======\n')
	}
});

server.listen(5000);
