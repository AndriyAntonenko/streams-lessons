const { Transform } = require('stream');
const toUpper = new Transform({
	transform: (buf, enc, next) => {
		next(null, buf.toString().toUpperCase());
	}
});

process.stdin
	.pipe(toUpper)
	.pipe(process.stdout);
