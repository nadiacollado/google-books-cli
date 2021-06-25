const boxen = require('boxen')
const fs = require('fs')
const Style = require('../utils/style')

module.exports = async () => {
  try {
    const style = new Style()
    
    // retrieves book list from text file
    await fs.readFile('book-list.txt', (err, data) => {
      if (err) {
        console.error(`There's been an issue finding your list!\n${err}`)
      } else {
        console.log(boxen(`Reading list:\n\n${data}`, style.box))
        return boxen(`Reading list:\n\n${data}`, style.box)
      }
    })
  } catch (error){
    console.error(error)
  }
}