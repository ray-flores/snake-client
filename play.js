const net = require("net");

// IP: 165.227.47.243
// PORT: 50541
// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541// PORT number here,
  });
  
  conn.on('data', (data) => {
    console.log('Server says:', data);
    });
  


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

