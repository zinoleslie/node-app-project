// console.log('Hello World');
// console.log('i wanna be with u');

const fs = require("fs");
//read input.text

 fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.log(err); 
        return;
    }
     console.log(data.toString());
});

// console.log(data.toString());

console.log("program ended");
// console.log(fs);