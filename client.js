const net = require("net");

const connect = function (data) {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541// PORT number here,
  });

  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
    conn.write('Name: RMF');
  });
  
  //receives message from server upon being kicked off for idling
  conn.on('data', (data) => {
    console.log('Server says:', data);
    });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};