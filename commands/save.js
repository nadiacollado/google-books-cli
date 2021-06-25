const boxen = require('boxen')
const saveBookToList = require('../utils/saveBookToList')
const Style = require('../utils/style')


module.exports = async (args, developmentMode) => {
  try {
    const style = new Style()
    const id = args.id || args._1

    // retrieves correct book from search using id
    const book = await saveBookToList(id, developmentMode)

    // prints saved book details
    console.log(boxen(`
    You have saved "${book.data.volumeInfo.title}" to your reading list!\n
    Book details:\n
    Title: ${book.data.volumeInfo.title}
    Author(s): ${book.data.volumeInfo.authors}
    Publisher: ${book.data.volumeInfo.publisher}
    ID: ${book.data.id}
    `, style.box
    ))
  } catch (error) {
    // checks is dev mode is true, prints Error if so
    if (developmentMode) {
      console.error(error)
    } else {
      // else, returns without Error obj
      return
    }
  }
}