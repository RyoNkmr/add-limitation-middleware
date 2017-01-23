var qs = require('qs');
var bytes = require('require');

/**
 * set array limitation for loopback application as middleware
 *
 * @param {Object} [options]
 * @return {Function} middleware
 * @public
 */

module.exports = function(options) {
  var opts = options || {};
  var limit = bytes.parse(opts.limit);

  if(limit == null) {
    limit = 100
  }

  return function addLimitationMiddleware(req, res, next) {
    var app = req.app;
    app.set('query parser', function(value, option) {
      return qs.parse(value, {arrayLimit: 100});
    });
    next();
  };
};
