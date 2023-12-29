const WHITELIST  = require('../constants');

exports.resolveWhitelist = (origin, callback) => {
  if (WHITELIST.indexOf(origin) !== -1) {
    callback(null, true);
  } else {
    callback(new Error(`Origin [${origin}] is not allowed by CORS!!!`));
  }

}
