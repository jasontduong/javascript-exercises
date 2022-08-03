const add = function(a, b) {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = array => {
  return array.reduce((first, last) => first + last, 0);
};

const multiply = array => {
  return array.reduce((first, last) => first * last, 1);
};

const power = (a, b) => {
  return a ** b;
};

const factorial = n => (n === 0) ? 1 : n * factorial(n - 1);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
