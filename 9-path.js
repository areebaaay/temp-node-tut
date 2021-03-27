
const path = require('path')
console.log(path.sep)

const filePath = path.join('./content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)


//Complete file path till CodeItTutorial Folder
const absolute = path.resolve(__dirname)
console.log(absolute)

//Complete file path till Test.txt
const absolute2 = path.resolve(__dirname,'content', 'subfolder', 'test.txt')
console.log(absolute2)