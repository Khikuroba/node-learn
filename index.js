const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var userRoutes = require('./routes/user.route')
var authRoutes = require('./routes/auth.route');

var authMiddleware = require('./middleware/auth.middleware');

const port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');    

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('adsfasdfacasda'));

app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    })
})

app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);

app.listen(port, function() {
    console.log('Server listen on port: ' + port);
});

