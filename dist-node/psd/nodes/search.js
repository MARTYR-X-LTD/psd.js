// Generated by CoffeeScript 1.7.1
(function() {
  var _;

  _ = require('lodash');

  module.exports = {
    childrenAtPath: function(path, opts) {
      var matches, query;
      if (opts == null) {
        opts = {};
      }
      if (!Array.isArray(path)) {
        path = path.split('/').filter(function(p) {
          return p.length > 0;
        });
      }
      path = _.clone(path);
      query = path.shift();
      matches = this.children().filter(function(c) {
        if (opts.caseSensitive) {
          return c.name === query;
        } else {
          return c.name.toLowerCase() === query.toLowerCase();
        }
      });
      if (path.length === 0) {
        return matches;
      } else {
        return _.flatten(matches.map(function(m) {
          return m.childrenAtPath(_.clone(path), opts);
        }));
      }
    }
  };

}).call(this);
