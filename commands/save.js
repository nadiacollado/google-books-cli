const searchById = require("../utils/searchById");

module.exports = async args => {
  try {
    const id = args.id || args._1

    // retrieve correct book from search using id
    const book = await searchById(id)
    console.log(book)

    console.log(`
    You have saved "${book.data.volumeInfo.title}" to your reading list!\n
    Book details below:\n
    Title: ${book.data.volumeInfo.title}
    Author(s): ${book.data.volumeInfo.authors}
    Publisher: ${book.data.volumeInfo.publisher}
    ID: ${book.data.id}
    `
    );
  } catch (error) {
    console.error(error)
  }
};