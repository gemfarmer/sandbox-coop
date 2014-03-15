'use strict';

var _ = require('lodash');

/**
 * Load environment configuration
 */

var config = _.merge(
    require('./env/all.js'),
    require('./env/' + process.env.NODE_ENV + '.js') || {}
);

module.exports = config;
