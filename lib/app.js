const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const cars = require('./routes/cars');

app.use('/api/cars', cars);

module.exports = app;