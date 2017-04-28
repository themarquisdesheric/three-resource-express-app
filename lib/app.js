const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const cars = require('./routes/cars');
const cats = require('./routes/cats');

app.use('/api/cars', cars);
app.use('/api/cats', cats);

module.exports = app;