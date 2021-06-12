const searchById = require('../utils/searchById')
const fs = require('fs')

module.exports = async id => {
  try {
    // search for book using its ID
    const book = await searchById(id)

    // save details in a readable format for list
    console.log(book)

    // save book details to reading list txt file
    const bookDetails = `
      Title: ${book.data.volumeInfo.title}
      Authors: ${book.data.volumeInfo.authors}
      Publisher: ${book.data.volumeInfo.publisher}
      ID: ${book.data.id}
    `

    await fs.appendFile('book-list.txt', bookDetails, err => {
      if (err){
        console.log('Error')
      }
    })

    // respond with book info for user message
    return book
  } catch (error) {
    console.log(error)
  }
};