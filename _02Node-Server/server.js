const http = require('http');

const routes = require('./routes');

// function reqListner(req, res) {
// }
//http.createServer(reqListner);

//const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);  //request that we get
    //process.exit();   //to shutdown the server
//});

//const server = http.createServer(routes);
const server = http.createServer(routes.handler);
console.log(routes.someText);
console.log("Hello JS");

server.listen(3000);