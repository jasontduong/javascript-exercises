const ftoc = function(temp) {
 let number = (temp - 32) / 1.8;
 return Math.round(number * 10) / 10;

};

const ctof = function(temp) { 
 let number = (temp * 1.8) + 32;
 return Math.round(number * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
