//const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public'))); //to make public folder available

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404);
    //res.send('<h1>404 Page Not Found!</h1>');
    res.sendFile(path.join(__dirname,'views','404.html'));
});

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); //allows the request to go to the next middleware below
// });

// app.use('/', (req, res, next) => {
//     console.log('In middleware | always runs');
//     next();
// });



//const server = http.createServer(app);
//server.listen(3000);
//OR
app.listen(3000);