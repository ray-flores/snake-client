

let connection;

const setupInput = function (conn) { //while conn can be put in here, we must adjust play.js to include connect in the run command of our setUpInput call; see below
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
   //event listener for keyboard input
  // stdin.on('data', handleUserInput);
};

//we removed handleUserInput from setupInput and placed our run command of connect() (in play.js) as an argument w/in run command of setUpInput() in play.js
const handleUserInput = (key) => {  //must use anon/arrow function format

  if (key === 'h') {
    connection.write('Say: Hello World');
  }

  if (key === 'i') {
    connection.write('Say: Yum');
  }

  if (key === 'w') {
    connection.write('Move: up');
  }

  if (key === 'a') {
    connection.write('Move: left');
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'd') {  
    connection.write('Move: right');
  }

  if (key === '\u0003') {
    console.log('Exited game');
    process.exit();
  }

}

module.exports = {
  setupInput
};
