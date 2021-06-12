module.exports = (query, books) => {
  try {

    // prints book list
    console.log(`
    Below please find 5 books based on your "${query}" search query. \n \n
    To save a book to your reading list, copy its ID and use it in the following command: \n \n
    google-books save --id yourBookIDHere
    `)

    books.data.items.map(book => {
      console.log(`
      Title: ${book.volumeInfo.title}
      Author(s): ${book.volumeInfo.authors}
      Publisher: ${book.volumeInfo.publisher}
      ID: ${book.id}
      `)
    })
  } catch (error) {
    console.error(error)
  }
};