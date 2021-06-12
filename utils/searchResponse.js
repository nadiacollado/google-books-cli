module.exports = (query, books) => {
  try {

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