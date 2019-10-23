const fs = require('fs');
const w = fs.createWriteStream('cool.txt');

w.once('finish', () => {
	console.log('FINISHED');
});

w.write('hi\n');
w.write('wow\n');
w.end();
