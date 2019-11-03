const log = require('./logger');

const stream = log();
let n = 0;

const iv = setInterval(() => {
  stream.write(Date.now() + '\n');
  
  if (n++ === 5) {
    clearInterval(iv);
    stream.end();
  }
}, 100);
