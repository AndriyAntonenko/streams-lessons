const { createHash } = require('crypto');

process.stdin
  .pipe(createHash('sha256'))
  .pipe(process.stdout);
