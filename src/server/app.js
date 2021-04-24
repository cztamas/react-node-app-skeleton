'use strict';

const path = require('path');
const express = require('express');

const app = express();
app.set('views', path.resolve(__dirname, 'views'));

app.get('/healthcheck', require('./endpoints/healthcheck/healthcheck'));
app.get('/', require('./endpoints/get'));

module.exports = app;
