const add = function(value1, value2) {
		
		return value1 + value2
};

const subtract = function(value1, value2) {
	
	return value1 - value2

};

const sum = function(value) {

	let summy = 0

	for(const val of value) {
		summy += val
	}
	
	return summy

};

const multiply = function(value) {

	let multy = 1

	for(const val of value) {
		multy *= val
	}
	
	return multy

};

const power = function(value1, value2) {
	
	return Math.pow(value1,value2)

};

const factorial = function(value) {

	if(value == 0 || value == 1) {
		return 1
	}
	else {
		for(let i=value-1;i>=1;i--) {
			value = value*i
		}
	}

	return value
	
};

add(2,6)
subtract(10,4)
sum([1,2,3,5,7,9])
multiply([2,4,6,8,10,12,14])
power(4,3)
factorial(10)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
