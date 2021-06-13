const fs = require('fs')
const searchById = require('../utils/searchById')
const boxen = require('boxen')
const Style = require('../utils/style')

module.exports = async id => {
  try {
    const style = new Style()

    // searches for book using its ID
    const book = await searchById(id)

    // saves details in a readable format for list
    const bookDetails = `
      Title: ${book.data.volumeInfo.title}
      Authors: ${book.data.volumeInfo.authors}
      Publisher: ${book.data.volumeInfo.publisher}
      ID: ${book.data.id}
    `
    // saves book to reading list txt file
    await fs.appendFile('book-list.txt', bookDetails, err => {
      if (err){
        console.log(boxen(style.error(`Error saving book to reading list. Please check save command format and try again.`), style.box))
      }
    })

    // returns with book info for user message
    return book
  } catch (error) {
    console.log(error)
  }
};