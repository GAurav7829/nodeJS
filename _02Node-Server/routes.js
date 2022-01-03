const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end();   //return so that it will not execute the below lines, exit out of the function  //ending the response, we don't write anymore
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => { //eventListner - on()
            console.log('chunk', chunk); //get chunk value from buffered stream
            body.push(chunk);
        });
        //return req.on, so that below line can't be executed before this on('end', function)
        return req.on('end', () => {  //eventListener - on()
            const parsedBody = Buffer.concat(body).toString(); //concat buffered data
            console.log('parseBody', parsedBody);
            const message = parsedBody.split('=')[1].replace("+", " ");//spliting key value, 1 is value
            //fs.writeFileSync('message.txt', message);//write file synchronous, block below lines of code until it finishes
            fs.writeFile('message.txt', message, (err) => { //write file async, not block the below line of code
                console.log('error', err);

                //redirect only when the writing file is completed
                res.statusCode = 302;   //302-redirect code
                res.setHeader('Location', '/');  //redirect to /
                return res.end();   //return so that below line code will not executed
            });

        });
    }
    //response that we send as html
    res.setHeader('Content-Type', 'text/html');  //setHeader(key, value)
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from NodeJS server</h1></body>');
    res.write('</html>');
    res.end();  //ending the response, we don't write anymore
};

//module.exports = requestHandler;    //registers funcction to module globally
//OR
// module.exports = {
//     handler: requestHandler,
//     someText: 'Hello NodeJS'
// };
//OR
//module.exports.handler = requestHandler;
//module.exports.someText = 'Hello NodeJS';
//OR
exports.handler = requestHandler;
exports.someText = 'Hello NodeJS';