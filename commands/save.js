const saveBookToList = require('../utils/saveBookToList')
const boxen = require('boxen')
const Style = require('../utils/style')


module.exports = async args => {
  try {
    const style = new Style()
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
    `, style.box
    ))
  } catch (error) {
    console.error(error)
  }
};