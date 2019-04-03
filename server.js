const express = require('express');
const hbs = require('hbs');

var app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('home.hbs')
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});