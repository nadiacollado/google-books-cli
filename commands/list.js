const fs = require('fs')
const boxen = require('boxen')
const boxenStyle = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  borderColor: 'cyan',
}

module.exports = async () => {
  await fs.readFile('book-list.txt', (err, data) => {
    if (err) throw err
    else {
      console.log(boxen(`\nReading list: \n\n${data}`, boxenStyle))
    }
  })
}