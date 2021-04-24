'use strict';

const express = require('express');
const app = express();

app.get('/healthcheck', (req, res) => {
  res.status(200).send({ success: true });
});

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">

        <title>React skeleton app</title>
      </head>
      <body>
        <div id="app"></div>

        <script src="http://localhost:7878/app.js"></script>
      </body>
    </html>
  `);
});

module.exports = app;
