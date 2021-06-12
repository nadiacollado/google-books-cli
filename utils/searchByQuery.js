const axios = require('axios')

module.exports = async query => {
  try {

    if (query === undefined || !query || query === true && query !== 'true') {
      throw new Error(`
      Your query did not yield any results. \n
      Please make sure you have correctly formatted your search. The correct format for the search command is as follows: \n
      google-books search --query "search query"
      `);
    }

    const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&startIndex=0&maxResults=5&projection=lite`
      )
  
    return books
  } catch (error) {
    console.log(error)
  }
};