const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(process.stdout);
    req.once('end', () => {
      res.end('OK\n');
    });
  } else {
    res.setHeader('Content-Type', 'text/plain');
    fs.createReadStream('text.txt').pipe(res);
  }
});

server.listen(5000);
