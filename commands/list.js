const fs = require('fs')
const boxen = require('boxen')
const Style = require('../utils/style')

module.exports = async () => {
  try {
    const style = new Style()
    
    // retrieves book list from text file
    await fs.readFile('book-list.txt', (err, data) => {
      if (err) throw err
      else {
      console.log(boxen(`\nReading list: \n\n${data}`, style.box))
      }
    })
  } catch (error){
    console.log(error)
  }
}