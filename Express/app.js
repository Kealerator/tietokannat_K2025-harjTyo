var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const opiskelijaRouter = require('./routes/opiskelija');
const opintojaksoRouter = require('./routes/opintojakso');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/favicon.ico', (req, res) => res.status(204).end());


app.use('/opiskelija', opiskelijaRouter);
app.use('/opintojakso', opintojaksoRouter);

module.exports = app;
