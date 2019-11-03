const duplexify = require('duplexify');
const mkdirp = require('mkdirp');
const fs = require('fs');

module.exports = (name) => {
  const d = duplexify();
  mkdirp('logs', (err) => {
    const w = fs.createWriteStream(`logs/${name}.log`);
    d.setWritable(w);
  });
  return d;
};

