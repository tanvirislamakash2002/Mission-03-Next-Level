const fs = require('fs')

fs.writeFileSync("./data/app.log", 'application started')
console.log('file created');

const logEntry1 = `${new Date().toISOString()} user logged in\n`

fs.appendFileSync('./data/app.log', logEntry1)

const logEntry2= `${new Date().toISOString()} data fetched`

fs.appendFileSync("./data/app.log", logEntry2)

console.log('task complete');