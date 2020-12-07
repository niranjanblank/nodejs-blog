const fs = require('fs')

// reading files
// fs.readFile('./docs/blogs1s.txt',(err,data)=>{
//     if (err){
//         console.log(err)
//     }
//     else{
//     console.log(data.toString()) //data contains buffer
//     }
// }) //readFile is async 

// console.log('last line')
// writing files
// fs.writeFile('./docs/blogs2.txt','Hello World', ()=>{
//     console.log("Data Added")
// }) //If File exists it overwrites it, if it doesnt exist it creates the file.

// directories

// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('folder created')
//         }
//         })
// }
// else {
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         else {
//             console.log("folder deleted")
//         }
//     })
// }



//deleting file

if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{ //unlink deletes the file
       if(err){
       console.log(err)
    } 
    else{
        console.log('file deleted')
    }
    }) 
}