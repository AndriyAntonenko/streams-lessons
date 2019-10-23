const net = require('net');

net.createServer((stream) => {
  stream.pipe(stream);
}).listen(5000);
