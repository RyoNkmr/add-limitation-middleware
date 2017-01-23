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
    var filter = req.query.filter;
    if(typeof filter !== 'undefined' && typeof filter != 'string') {
      return next();
    }

    if(typeof filter === 'undefined') {
      filter = {limit: limit};
    } else {
      filter = JSON.parse(filter);
    }

    req.query.filter = JSON.stringify(filter);
    return next();
  };
};
