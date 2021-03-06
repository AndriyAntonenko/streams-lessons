const split = require('split2');
const through = require('through2');

let lineCount = 0;

process.stdin
  .pipe(split())
  .pipe(through(
     (buf, enc, next) => {
        console.log(buf);
        lineCount++;
        next();
      },
     (next) => { 
        console.log(lineCount);
        next();
     }
  ));
