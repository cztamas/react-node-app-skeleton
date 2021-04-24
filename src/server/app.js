'use strict';

const path = require('path');
const express = require('express');
const { resourceBaseUrl } = require('./config');

const app = express();
app.set('views', path.resolve(__dirname, 'views'));

app.get('/healthcheck', (req, res) => {
  res.status(200).send({ success: true });
});

app.get('/', (req, res) => {
  res.render('index.ejs', { resourceBaseUrl });
});

module.exports = app;
