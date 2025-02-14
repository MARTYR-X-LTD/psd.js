// Generated by CoffeeScript 1.7.1
(function() {
  var _;

  _ = require('lodash');

  module.exports = {
    root: function() {
      if (this.isRoot()) {
        return this;
      }
      return this.parent.root();
    },
    isRoot: function() {
      return this.depth() === 0;
    },
    children: function() {
      return this._children;
    },
    ancestors: function() {
      if ((this.parent == null) || this.parent.isRoot()) {
        return [];
      }
      return this.parent.ancestors().concat([this.parent]);
    },
    hasChildren: function() {
      return this._children.length > 0;
    },
    childless: function() {
      return !this.hasChildren();
    },
    siblings: function() {
      if (this.parent == null) {
        return [];
      }
      return this.parent.children();
    },
    nextSibling: function() {
      var index;
      if (this.parent == null) {
        return null;
      }
      index = this.siblings().indexOf(this);
      return this.siblings()[index + 1];
    },
    prevSibling: function() {
      var index;
      if (this.parent == null) {
        return null;
      }
      index = this.siblings().indexOf(this);
      return this.siblings()[index - 1];
    },
    hasSiblings: function() {
      return this.siblings().length > 1;
    },
    onlyChild: function() {
      return !this.hasSiblings();
    },
    descendants: function() {
      return _.flatten(this._children.map(function(n) {
        return n.subtree();
      }));
    },
    subtree: function() {
      return [this].concat(this.descendants());
    },
    depth: function() {
      return this.ancestors().length + 1;
    },
    path: function(asArray) {
      var path;
      if (asArray == null) {
        asArray = false;
      }
      path = this.ancestors().map(function(n) {
        return n.name;
      }).concat([this.name]);
      if (asArray) {
        return path;
      } else {
        return path.join('/');
      }
    }
  };

}).call(this);
