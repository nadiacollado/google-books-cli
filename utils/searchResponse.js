const boxen = require('boxen')
const Style = require('../utils/style')


module.exports = (query, books) => {
  const style = new Style()
  
  try {
    // returns formatted results from Google Books API
    console.log(boxen(`
    Below please find 5 books based on your "${query}" search query. \n \n
    To save a book to your reading list, copy its ID and use it in the following command: \n \n
    google-books save --id yourBookIDHere
    `, style.box))

    books.data.items.map(book => {
      console.log(`
      Title: ${book.volumeInfo.title}
      Author(s): ${book.volumeInfo.authors}
      Publisher: ${book.volumeInfo.publisher}
      ID: ${book.id}
      `)
    })
  } catch (error) {
    return error
  }
};