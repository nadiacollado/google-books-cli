const axios = require('axios')
const boxen = require('boxen')
const Style = require('../utils/style')


module.exports = async (id, developmentMode) => {
  try {
    const style = new Style()
    
    // checks if id exists and if it's valid, if it doesn't, throw error and return
    if (!id || id === undefined || typeof id !== 'string'){
      throw new Error(boxen(style.error(`Invalid ID. Check ID spelling and try again.`), style.box))
    }

    // retrieves book from Google Books API using ID, return book
    const book = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)

    return book
  } catch (error) {
    if (developmentMode) {
      return error
    }
    // else, prints custom Error message for user
    console.error(error.message)
  }

};