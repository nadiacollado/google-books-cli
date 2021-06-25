const axios = require('axios')
const boxen = require('boxen')
const Style = require('../utils/style')


module.exports = async (query, developmentMode) => {
  const style = new Style()
  try {
    const errorMessage = style.error(`Your query did not yield any results.\n`)

    // checks if query exists, if it doesn't, throw error
    if (query === undefined || !query || query === true && query !== 'true') {
      throw new Error((boxen(`
    ${errorMessage}
    Please make sure you have correctly formatted your search. The correct format for the search command is as follows: \n
    google-books search --query "search query"
    `, style.box)))
    } else {
      // retrives book list from Google Books API using query
      const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&startIndex=0&maxResults=5&projection=lite`
      )


      // else, returns book list
       // returns book list
      return books
    }
  } catch (error) {
    if (developmentMode) {
      return error
    }
    console.error(error.message)
  }
};