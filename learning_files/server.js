const fs = require('fs')
const http = require('http')
const _ = require('lodash')



const server = http.createServer((req,res)=>{

//lodash
const num = _.random(0,20)
console.log(num)

const greet = _.once(()=>{
    console.log('hello')
})



// console.log(req.url, req.method)

//set header content type
// res.setHeader('content-Type','text/plain') //for plain text
res.setHeader('content-Type','text/html')// for html
// res.write('<head><title>Hello</title></head>')
// res.write('<h1>Hello World</h1>') //writing html

let path = './views/'

switch(req.url){
    case '/':
        path +='index.html'
        res.statusCode = 200;
        break
    case '/about':
        path +='about.html'
        res.statusCode = 200;
        break
    case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location','/about')
        res.end()
        break
    default:
        path+='404.html'
        res.statusCode = 404;
        break
}

//send an html
fs.readFile(path,(err, data)=>{
    if(err){
        console.log('Error')
    }
    else{
        // res.write(data) // for multiple things we use res.write() , for single thing we can just pass data to res.end()
        
        res.end(data)
    }
})

// res.end()
})

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
}) //3000 is port number