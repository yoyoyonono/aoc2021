const fs = require('fs');
var inputs = fs.readFileSync('./day2/input.txt').toString().split('\n');

var horizontalPos = 0;
var depth = 0;

for (var i = 0; i < inputs.length; i++) {
  tokens = inputs[i].split(' ');
  switch (tokens[0]) {
    case 'forward':
      horizontalPos += parseInt(tokens[1]);
      break;
    case 'up':
      depth -= parseInt(tokens[1]);
      break;
    case 'down':
      depth += parseInt(tokens[1]);
      break;    
  }
}

console.log(horizontalPos * depth)