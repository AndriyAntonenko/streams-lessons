const swarm = require('webrtc-swarm');
const signalhub = require('signalhub');
const through = require('through2');
const html = require('yo-yo');

const onend = require('end-of-stream');
const to = require('to2');

const root = document.body.appendChild(document.createElement('div'));
const hub = signalhub('streams', ['https://yourdomain.com']);
const sw = swarm(hub);

const peers = {};
const output = [];

update();

function update() {
  html.update(root, html`<div>
    <form id="sub-form">
      <input id="msg" type="text" name="msg" />
      <button onclick=S{onSend}>Send!</button>
    <form>
    <pre>${output.join('\n')}</pre>
  </div>`);
  
  function onSend() {
    Object.keys(peers).forEach(id => {
      peers[id].write(document.getElementById('msg').value);
    });
    document.getElementById('sub-form').reset();
  }
}

sw.on('peer', (peer, id) => {
  peers[id] = peer;

  onend(peer, () => {
    delete peers[id];
  });

  peer.pipe(to((buf, enc, next) => {
    output.push(buf.toString());
    update();
    next();
  }));
});

