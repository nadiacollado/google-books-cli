const saveBookToList = require('../utils/saveBookToList')
const boxen = require('boxen')

const boxenStyle = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  borderColor: 'cyan',
}

module.exports = async args => {
  try {
    const id = args.id || args._1

    // retrieves correct book from search using id
    const book = await saveBookToList(id)

    // prints saved book details
    console.log(boxen(`\nYou have saved "${book.data.volumeInfo.title}" to your reading list!\n
    Book details:\n
    Title: ${book.data.volumeInfo.title}
    Author(s): ${book.data.volumeInfo.authors}
    Publisher: ${book.data.volumeInfo.publisher}
    ID: ${book.data.id}
    `, boxenStyle
    ))
  } catch (error) {
    console.error(error)
  }
};