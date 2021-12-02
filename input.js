



const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = (key) => {  //must use anon/arrow function format
    // if (key === 'j') {
    //   process.stdout.write('Move: up');
    // }
    // if (key === 'l') {
    //   process.stdout.write('Move: right');
    // }
    // if (key === 'h') {
    //   process.stdout.write('Move: left');
    // }
    // if (key === 'k') {
    //   process.stdout.write('Move: down');
    // }
    if (key === '\u0003') {
      process.stdout.exit();
    }
  }

   //event listener for keyboard input
  stdin.on('data', handleUserInput);
  
  return stdin;
};

module.exports = setupInput;
