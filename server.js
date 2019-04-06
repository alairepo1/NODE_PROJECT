const express = require('express');
const hbs = require('hbs');

var app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/view'));

app.get('/', (request, response) => {
    response.render('home.hbs')
});

app.get('/my_cart', (request, response) => {
    response.render('my_cart.hbs')
});

app.get('/shop', (request, response) => {
    response.render('shop.hbs')
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
        // console.log(`Server is up on port 8080`)
});