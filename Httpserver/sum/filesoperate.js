const fs = require('fs');
const path = require('path');

// Reading Data
const filePath = path.join('/sum/home')
const filePathResolved = path.resolve('/src/home', 'data.txt')


console.log(filePath)
console.log(filePathResolved)
console.log(path.extname(filePathResolved))
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
});