const fs = require('fs');
var inputs = fs.readFileSync('./day1/input.txt').toString().split('\n').map(x => parseInt(x));
var increased = 0;
for (var i = 3; i < inputs.length; i++) {
  if (inputs[i - 1] + inputs[i - 2] + inputs[i - 3] < inputs[i] + inputs[i - 1] + inputs[i - 2]) {
    increased++;
  }
}
console.log(increased);