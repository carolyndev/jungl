const resolveWhitelist = require('../utils');

exports.WHITELIST = [
  'http://localhost:3000/*',
  'http://localhost:9999/*',
];

exports.CORS_OPTIONS = {
  origin: resolveWhitelist,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
