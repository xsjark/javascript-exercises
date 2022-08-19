const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((a, b) => a + b, 0);

const multiply = (array) => array.reduce((a, b) => a * b);

const power = (a, b) => a ** b;

const factorial = (num) => num == 0 ? 1 : [ ...Array(num).keys() ].map(i => i+1).reduce((a, b) => a * b);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
