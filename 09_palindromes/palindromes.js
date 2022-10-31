const palindromes = function (word) {

	word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() +]/g, "").toLowerCase()

	j = word.length - 1

	let count = 0

	for(let i=0;i<word.length;i++) {
		if(word[i] == word[j]) {
			j--
			count++
		}
		else
			return false
	}

	if(count == word.length) {
		return true
	} 

//return word

};

console.log(palindromes('Animal loots foliated detail of stool lamina.'))

// Do not edit below this line
module.exports = palindromes;
