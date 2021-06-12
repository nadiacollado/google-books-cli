const axios = require('axios')

module.exports = async id => {
  try {
    // check if id exists and if it's valid, if it doesn't, throw error and return
    if (!id || id === undefined || typeof id !== 'string'){
      throw new Error(`Invalid ID`)
    }

    // retreive book from Google Books API using ID, return book
    const book = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    return book
  } catch (error) {
    console.log(error)
  }
};