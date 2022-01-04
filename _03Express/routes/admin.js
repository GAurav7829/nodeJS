const path = require('path');   //core node js module

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.post('/add-product', (req, res, next) => {
    console.log('In middleware | product');
    console.log('request body: ', req.body);
    console.log(req.body.title);
    res.redirect('/');
});

router.get('/add-product', (req, res, next) => {
    console.log('In middleware | add-product');
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

module.exports = router;