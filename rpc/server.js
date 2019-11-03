const net = require('net');
const rpc = require('rpc-stream');

net.createServer(stream => {
  stream.pipe(rpc({
    hello: (name, cb) => {
      cb(null, `howdy ${name}`)
    }
  })).pipe(stream);
}).listen(5000);
