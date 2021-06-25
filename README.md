## Google-Books-Cli using Node

### System Requirements

To use the Google-Books-Cli, you need to have [Git](https://git-scm.com/), [Node, and NPM](https://nodejs.org/en/) installed on your development machine.

### Instructions

Open your terminal, create a directory with a name of your choosing, and clone this repository into your new directory.

`git clone https://github.com/nadiacollado/google-books-cli.git`

Change into the google-books-cli directory

`cd google-books-cli`

Install dependencies

`npm i `

### Setup

To start the Google-Books CLI, type the command `bin/google-books` into your terminal. From here, you can use the following commands:

#### Search command

This command searches the Google Books API and returns five books related to your query. Each book will include the following information: title, authors, publishers, and ID. Please wrap your search query in quotation marks.

`bin/google-books search --query "your query"`

#### Save command

To save a book, copy the book's ID into the save command:

`bin/google-books save --id yourBookIDHere`

Once saved, the book will be added to your book list which you can retrieve using the list command.

#### List command

To print your book list to the console, use the list command:

`bin/google-books list`

#### Help command

To view a list of our CLI's commands, use the help command:

`bin/google-books help`

#### Version command

To view the application's version, use the version command:

`bin/google-books version`

### Tests

Use npm's test command to run tests in the console:

`npm test`

### Dependencies

[Axios](https://www.npmjs.com/package/axios)

[Minimist](https://www.npmjs.com/package/minimist)

[Boxen](https://www.npmjs.com/package/boxen)

[Chalk](https://www.npmjs.com/package/chalk)

[Jest](https://jestjs.io/)
