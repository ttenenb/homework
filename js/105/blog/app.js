const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.locals.title = 'PCS MERN Blog'

app.listen(80);