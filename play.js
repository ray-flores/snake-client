
const { connect } = require("./client");

// setup interface to handle user input from stdin
const { setupInput } = require('./input');

// IP: 165.227.47.243
// PORT: 50541
// establishes a connection with the game server

console.log("Connecting ...");
connect();

setupInput(); // keep below function re: hoisting

//console.log(connect); to show object in terminal