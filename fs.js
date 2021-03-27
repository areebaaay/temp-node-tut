const fs = require('fs')
const path = require('path')

//Create Folder
// fs.mkdir(path.join(__dirname, './content/subfolder2'), {}, err =>{
//     if (err)
//     throw err
//     console.log("Folder created..")
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, './content/subfolder2', 'NewFile.txt'), 'Hello World of New File!! ', err =>{
//     if (err)
//     throw err
//     console.log("File created and written..")

//     fs.appendFile(path.join(__dirname, './content/subfolder2', 'NewFile.txt'), 'I am learning File System in node js',
//     err =>{
//         if (err)
//         throw err
//         console.log("File created and written..")
// })
// })



//Read File
// fs.readFile(path.join(__dirname, './content/subfolder2/NewFile.txt'), 'utf8', (err, data) =>{
//     if (err)
//     throw err
//     console.log(data)
// })

//Rename file
fs.rename(path.join(__dirname, './content/subfolder2/NewFile.txt'),
 (__dirname, './content/subfolder2/NewFileUpdated.txt'),
 (err) =>{
    if (err)
    throw err
    console.log('File renamed!!')
})
