const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding:'utf-8'})
const writeStream = fs.createWriteStream('./docs/blog4_pipe.txt')
// readStream.on('data',(chunk)=>{
//     console.log('\n-------------- New Chunk ----------------\n')
//     console.log(chunk)
//     writeStream.write('\n New CHUNK \n')
//     writeStream.write(chunk)
// }) // .on is an event listener which works everytime we receive chunk of data

//Pipe must be from readable to writable

readStream.pipe(writeStream)