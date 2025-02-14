// Generated by CoffeeScript 1.7.1
(function() {
  var Util;

  Util = require('./util.js');

  module.exports = {
    cmykToRgb: function(c, m, y, k) {
      var b, g, r;
      r = Util.clamp((65535 - (c * (255 - k) + (k << 8))) >> 8, 0, 255);
      g = Util.clamp((65535 - (m * (255 - k) + (k << 8))) >> 8, 0, 255);
      b = Util.clamp((65535 - (y * (255 - k) + (k << 8))) >> 8, 0, 255);
      return [r, g, b];
    }
  };

}).call(this);
