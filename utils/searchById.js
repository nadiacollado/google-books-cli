const axios = require('axios')

module.exports = async id => {
  try {
    // checks if id exists and if it's valid, if it doesn't, throw error and return
    if (!id || id === undefined || typeof id !== 'string'){
      throw new Error(`Invalid ID. Check ID spelling and try again.`)
    }

    // retrieves book from Google Books API using ID, return book
    const book = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)

    return book
  } catch (error) {
    console.log(error)
  }
};