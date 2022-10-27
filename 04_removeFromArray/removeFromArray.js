const removeFromArray = function(arr, ...value) {

	for(const val of value) {
		for(let i=0;i<arr.length;i++) {	
			if(typeof val == typeof arr[i]) {
				if(arr[i] == val) {
					arr.splice(i, 1)
				}
			}
		}
	}

	return arr
};


removeFromArray([1, 2, 3], "1", 3)

// Do not edit below this line
module.exports = removeFromArray;
