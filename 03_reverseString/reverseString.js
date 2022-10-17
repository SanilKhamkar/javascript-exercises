const reverseString = function(text) {

	let value = []
	let reverseValue = []
	let count = 0

	for(let i=0;i<text.length;i++) {
		value[i] = text[i]
	}
 
 	for(let i=value.length;i>=0;i--) {
 		reverseValue[count] = value[i]
 		count++
 	}

	return reverseValue.toString().replace(/,/g,"")
};

reverseString('')

// Do not edit below this line
module.exports = reverseString;
