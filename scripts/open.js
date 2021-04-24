'use strict';

require('dotenv').config();

const open = require('open');
const { port } = require('../src/server/config');

open(`http://localhost:${port}`);
