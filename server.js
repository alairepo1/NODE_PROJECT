const MongoClient = require('mongodb').MongoClient;
const utils = require('./server_utils/mongo_util.js');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const url = require('url')
=======

//express-authenticator unused

>>>>>>> a367772eab9791678a1c2405f53772ca718e46c9

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = 8080;
// process.env.PORT || 8080;

//Needed to use partials folder
hbs.registerPartials(__dirname + '/views/partials');

//Helpers
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});


//Helpers End


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));


app.get('/', (request, response) => {
    response.render('home.hbs', {
        title: "AJZ E-Commerce"
    })
});

app.get('/my_cart', (request, response) => {
    response.render('my_cart.hbs', {
        title: "My Cart"
    })
});

<<<<<<< HEAD
=======
var itemlist = require('./models/products.js');

app.get('/shop', (request, response, next) => {
    var items = itemlist.find();

    response.render('shop.hbs', {
            title: 'shop',
            products: items
        }
    );
});

>>>>>>> a367772eab9791678a1c2405f53772ca718e46c9
app.get('/shop', (request, response) => {
    response.render('shop.hbs', {
        name: "converse",
        price: 50.00
    })
});


app.get('/login', (request, response) => {
    response.render('login.hbs')
});

app.get('/sign_up', (request, response) => {
    response.render('sign_up.hbs', {
        message: null
    })
});

//mongoDB

app.post('/insert', function(request, response) {
    var email = request.body.email;
    var pwd = request.body.pwd;
    var pwd2 = request.body.pwd2;



    var db = utils.getDb();
    db.collection('Accounts').findOne({ email: email }, function(err, user) {
        if (err) {
            response.render('404.hbs')
        }
        if (user) {
            console.log(user);
            response.render('sign_up.hbs', {
                message: "Account already exists, Try again."
            })

        } else {

            if (pwd === pwd2) {
                db.collection('Accounts').insertOne({
                    email: email,
                    pwd: pwd
                }, (err, result) => {
                    if (err) {
                        response.send('Unable to create account');
                    }
                    response.render('sign_up.hbs', {
                        message: `Account ${email} created`
                    })
                });
            } else {
                response.render('sign_up.hbs', {
                    message: `Password does not match`
                })
            }
        }
    })
});

app.post('/insert_login', (request, response) => {
    var email = request.body.email;
    var pwd = request.body.pwd;
    var db = utils.getDb();
    db.collection('Accounts').findOne({ email: email }, function(err, user) {
        if (err) {
            response.render('404.hbs')
        }
        if (user && user.email != '') {
            if (pwd == user.pwd) {
                response.redirect('/');
            } else {
                response.render('login.hbs', {
                    message: 'Incorrect password',
                    email: user.email
                });
            }
        } else if (user.email == '') {
            response.render('login.hbs', {
                message: 'E-mail can\'t be blank'
            });

        } else {
            response.render('login.hbs', {
                message: 'Invalid email or password'
            });
        }
    });
});

app.get('/getall-shoes', (request, response) => {
    var db = utils.getDb();
    db.collection('Shoes').find({}).toArray(function(err, result) {
        if (err) {
            response.send("Cannot find shoes")
        }
        response.send(result);
    }, () => {
        db.close();
        response.render('')
    })
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
    utils.init();
});