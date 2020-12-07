const xyz = require('./people') // require searches the file and runs it
const {people} = require('./people') // importing single content from multiple exports in people.
// console.log(xyz.people, xyz.ages)
// console.log(people)


const os = require('os')
console.log(os.platform(), os.homedir())