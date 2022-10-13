const repeatString = function(text, value) {

	let txt = ''
	
	if(value >= 0){
		for(let i=0;i<value;i++) {
		txt += text
		}
	}
	else {
		txt = 'ERROR'
	}
	

	return txt
};

repeatString('', 10)

// Do not edit below this line
module.exports = repeatString;
