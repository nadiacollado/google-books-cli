const axios = require('axios')
const boxen = require('boxen')
const Style = require('../utils/style')


module.exports = async query => {
  try {
    const style = new Style()

    // checks if query exists, if it doesn't, throw error
    if (query === undefined || !query || query === true && query !== 'true') {
      const errorMessage = style.error(`Your query did not yield any results.\n`)
      
      throw new Error(boxen(`
      ${errorMessage}
      Please make sure you have correctly formatted your search. The correct format for the search command is as follows: \n
      google-books search --query "search query"
      `, style.box))
    }

    // retrives book list from Google Books API using query
    const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&startIndex=0&maxResults=5&projection=lite`
      )

    // returns book list
    return books
  } catch (error) {
    console.error(error.message)
  }
};