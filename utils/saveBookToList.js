const searchById = require('../utils/searchById')
const fs = require('fs')

module.exports = async id => {
  try {
    // search for book using its ID
    const book = await searchById(id)

    // save details in a readable format for list

    // save book details to reading list txt file
    console.log(book)
    await fs.appendFile('book-list.txt', book, err => {
      if (err){
        console.log('Error')
      }
    })

    // respond with book info for user message
  } catch (error) {
    console.log(error)
  }
};