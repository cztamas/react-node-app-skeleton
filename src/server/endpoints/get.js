'use strict';

const { resourceBaseUrl } = require('../config');

module.exports = (req, res) => {
  res.render('index.ejs', { resourceBaseUrl });
};
