const fs = require('fs')

// Reading data
// fs.readFile('data.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

// Create a File

// fs.writeFileSync('Hcl.txt', 'name: rahul, position: Manager')


//Write Data

// fs.writeFile('employee.txt', 'New Employee', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('File is written')
//     }

// });


//Append Data

// fs.appendFile('employee.txt', '\n Another Employee', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('FIle is updated')
//     }
// });


fs.unlink('employee.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File is Deleted');
    }
});
console.log("This is an operation")