/**
 * set limitation for loopback application as middleware
 *
 * @param {number} [defaultLimit]
 * @return {Function} middleware
 * @public
 */

module.exports = function(defaultLimit) {
  var limit = defaultLimit || 100;

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
