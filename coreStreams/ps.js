const { spawn } = require('child_process');

const ps = spawn('grep', ['potato']);
ps.stdout.pipe(process.stdout);

// write data
ps.stdin.write('cheese\n');
ps.stdin.write('carrots\n');
ps.stdin.write('carrot potatos\n');
ps.stdin.write('potato!\n');
ps.stdin.end();
