const fs = require('fs');   //require filesystem library in node

//to create txt file
fs.writeFileSync('hello.txt', 'Hello from nodeJS');  //filename, content

console.log('Writing file in node JS');