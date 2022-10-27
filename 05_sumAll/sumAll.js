const sumAll = function(int1, int2) {

	let sum = 0
	let temp = 0

	if(int1 < 0 || int2 < 0 || typeof int1 == 'string' || typeof int2 == 'string' || typeof int1 == 'object' || typeof int2 == 'object') {
		return 'ERROR'
	} 
	else {
		if(int1 > int2) {
		temp = int2
		int2 = int1
		int1 = temp
		}

		for(let i=int1; i<=int2; i++) {
			sum += i 
		}

		return sum
	}
	
};

sumAll(1, 5)

// Do not edit below this line
module.exports = sumAll;
