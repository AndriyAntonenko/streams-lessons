const net = require('net');
const crypto = require('crypto');
const pump = require('pump');
const pw = 'abc123';

net.createServer(stream => {
  pump(
    stream,
    crypto.createDecipher('aes192', pw),
    net.connect(5000, 'localhost'),
    stream,
    (err) => { console.log(err); }
  );
})
