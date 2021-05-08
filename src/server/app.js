'use strict';

const path = require('path');
const express = require('express');
const serveFavicon = require('serve-favicon');

const app = express();

app.use(serveFavicon(path.join(__dirname, '../../static/favicon.ico')));
app.set('views', path.resolve(__dirname, 'views'));

app.get('/healthcheck', require('./endpoints/healthcheck/healthcheck'));
app.get('/', require('./endpoints/get'));

module.exports = app;
