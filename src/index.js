'use strict';

const express = require('express');
const app = express();
const port = 8128;

app.get('/healthcheck', (req, res) => {
  res.status(200).send({ success: true });
});

app.listen(port);
console.log(`Server listening on http://localhost:${port}`);
