const leapYears = function(year) {

	let value = ''

	if(year % 4 == 0 && year % 100 != 0 || year % 4 == 0 && year % 400 == 0) {
		value = true
	}
	else {
		value = false
	}

	return value
};


leapYears(1900)

// Do not edit below this line
module.exports = leapYears;
