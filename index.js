var qs = require('qs');

/**
 * set array limitation for loopback application as middleware
 *
 * @param {Object} [options]
 * @return {Function} middleware
 * @public
 */

module.exports = function(options) {
  var opts = options || {};
  var limit = opts.limit;

  if(limit == null) {
    limit = 100;
  }

  return function addLimitationMiddleware(req, res, next) {
    var filter = qs.parse(req.query.filter);
    filter.limit = filter.limit || limit;
    req.query.filter = qs.stringify(filter);
    next();
  };
};
