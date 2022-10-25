const removeFromArray = function(arr, ...value) {

	for(const val of value) {
		if(typeof val == 'number') {
			for(let i=0;i<arr.length;i++) {	
				if(arr[i] == val) {
					arr.splice(i, 1)
				}
			}
		}
	}

	console.log(arr)

	return arr
};



removeFromArray([1, 2, 3], "1", 3)

// Do not edit below this line
module.exports = removeFromArray;
