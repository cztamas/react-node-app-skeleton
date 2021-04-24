'use strict';

const app = require('./app');
const port = 8128;

app.listen(port);
console.log(`Server listening on http://localhost:${port}`);
