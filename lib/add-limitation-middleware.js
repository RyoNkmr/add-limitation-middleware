var qs = require('qs');
module.exports = function() {
  return function addLimitationMiddleware(req, res, next) {
    var app = req.app;
    app.set('query parser', function(value, option) {
      return qs.parse(value, {arrayLimit: 100});
    });
  };
};
