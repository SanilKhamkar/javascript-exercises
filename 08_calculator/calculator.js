const add = function(value1, value2) {
		
		return value1 + value2
};

const subtract = function(value1, value2) {
	
	return value1 - value2

};

const sum = function(value1) {
	
	return ''

};

const multiply = function(value1) {

	return value1 * value2

};

const power = function(value1, value2) {
	
	return Mat.pow(value1,value2)

};

const factorial = function(value1) {

	return ''
	
};

console.log('Addition: ',add(0,0))
console.log('Subract: ', subtract(10,4))
console.log('Sum of numbers: ', sum([7,11]))
console.log('Multiplication:  ', multiply([2,4])
console.log('Power: ', power(4,3))
console.log('Factorial: ', factorial(0))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
