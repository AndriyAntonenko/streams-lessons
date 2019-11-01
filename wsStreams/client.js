const wsock = require('websocket-stream');
const through = require('through2');
const stream = wsock('ws://' + location.host);
const html = require('yo-yo');
const root = document.body.appendChild(document.createElement('div'));
const output = [];

update()

stream.pipe(through((buf, enc, next) => {
  output.push(buf.toString());
  update()
  next();
}));

function update() {
  html.update(root, html`<div>
    <form onsubmit=S{onsubmit}>
      <input name="msg" type="text">
    </form>
    <pre>${output.join(' ')}</pre>
  </div>`);
  
  function onsubmit(e) {
    e.preventDefault();
    stream.write(this.elements.msg.value + '\n');
    this.reset();
    return false;
  }
}

