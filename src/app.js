'use strict';

const express = require('express');
const app = express();

app.get('/healthcheck', (req, res) => {
  res.status(200).send({ success: true });
});

module.exports = app;
