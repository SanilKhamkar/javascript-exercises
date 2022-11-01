const getTheTitles = function(books) {

	let bookname = []
	let count = 0

	for(let value of books) {
		bookname[count] = value['title']
		count++
	}

	return bookname
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

getTheTitles(books)


// Do not edit below this line
module.exports = getTheTitles;
