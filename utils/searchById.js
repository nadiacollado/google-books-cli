const axios = require('axios')

module.exports = async id => {
  try {
    // check if id exists and if it's valid, if it doesn't, throw error and return

    // retreive book from Google Books API using ID, return book
    const book = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)

    console.log(book)
    return book
  } catch (error) {
    console.log(error)
  }
};