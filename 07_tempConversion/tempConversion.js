const ftoc = function(value) {

  const formula = (value - 32) * (5/9) 

  return roundtemp(formula)

};

const ctof = function(value) {

  const formula = (value * (9/5) + 32)

  return roundtemp(formula)

};

const roundtemp = function(formula) {

  const round = Math.round(formula * 10) / 10

  return round

};

console.log('Fahrenheits to Celsius: ', ftoc(-100))
console.log('Celsius to Farenheits ', ctof(73.2))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

