const fibonacci = function(value) {

	let f1 = 0
	let f2 = 1

	if(value > 0) {
		for(let i=0;i<value;i++) {
			temp = f1
			f1 = f1 + f2
			f2 = temp
		}
	}
	else {
		return 'OOPS'
	}
	

	return f1
};

fibonacci("8")

// Do not edit below this line
module.exports = fibonacci;
