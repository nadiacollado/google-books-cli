const boxen = require('boxen')
const Style = require('../utils/style')


module.exports = (query, books) => {
  const style = new Style()
  
  try {
    // returns formatted results from Google Books API
    console.log(boxen(`Below please find a list of books based on your "${query}" search query.\nTo save a book to your reading list, copy its ID and use it in the following command:\n\ngoogle-books save --id yourBookIDHere`, style.box))

    books.data.items.map(book => {
      console.log(`
      Title: ${book.volumeInfo.title}
      Author(s): ${book.volumeInfo.authors}
      Publisher: ${book.volumeInfo.publisher}
      ID: ${book.id}
      `)
    })
    console.log(books.data.items.volumeInfo.authors)
  } catch (error) {
    return error
  }
}