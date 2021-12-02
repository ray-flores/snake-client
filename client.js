const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function (data) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
    conn.write('Name: RMF');
  });


  // Make snake move on connection, with time delay
  // conn.on('connect', () => {  
  //   conn.write('Move: up');
  //   let start = 0;
  //   let arr = ['Move: up', 'Move: right', 'Move: right', 'Move: down', 'Move: down','Move: down'];
  //   for (let i = 0; i < arr.length; i++) {
  //     setTimeout(() => {
  //       conn.write(arr[i]);
  //     }, (start += 1000))
  //   }
  // });
  
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
