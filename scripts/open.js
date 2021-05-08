'use strict';

require('dotenv-haphap').config('environment/.env');

const open = require('open');
const { port } = require('../src/server/config');

open(`http://localhost:${port}`);
