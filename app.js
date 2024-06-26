require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
require('./models/connection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
var projetRouter = require('./routes/projets');


var app = express();

const cors = require('cors');
app.use(cors());

// Autoriser des domaines spécifiques
const corsOptions = {
    origin: ['https://portfolio-frontend-beryl.vercel.app', 'https://portfolio.emiliengiraud.fr'],
};

app.use(cors(corsOptions));

// Vos routes ici

app.listen(3000, () => console.log('Server running on port 3000'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter)
app.use('/projets', projetRouter)


module.exports = app;
