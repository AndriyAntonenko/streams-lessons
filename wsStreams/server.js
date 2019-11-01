const http = require('http');
const ecstatic = require('ecstatic');
const through = require('through2');

const server = http.createServer(ecstatic(__dirname + '/public'));
server.listen(3000);

const wsock = require('websocket-stream');
wsock.createServer({ server }, (stream) => {
  // `stream` is a duplex stream
  stream.pipe(loud()).pipe(stream);	
});

function loud() {
  return through((buf, enc, next) => {
    next(null, buf.toString().toUpperCase());
  });
}
