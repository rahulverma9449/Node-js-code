const fs = require("fs");

// Creating and Writing a file

try {

    fs.writeFileSync('employee.txt', 'Name: John Doe, Age: 40, Position: Manager')
} catch (error) {
    console.log(error)
}

// Append another Employee Data

fs.appendFileSync('employee.txt', '\nName: Anjali verma, Age: 28, Position: Advocate');

// Deleting a file
try {
    fs.unlinkSync('employee.txt')
    console.log("File is available");
} catch (error) {
    console.log("File doesn't exist");
}


console.log("This is another operation being performed")

// // To read file content using blocking code.

// console.log('Starting to read')

// const buffer = fs.readFileSync("./data.txt", { encoding: 'utf8' });
// console.log(buffer)



// console.log("This is another operation being performed")