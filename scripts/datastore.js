(function (window) {
  'use strict';
  var App = window.App || {};

  // DataStore constructor
  function DataStore() {
    this.data = {};
  }

  // Store customer email (key) and order (val)
  DataStore.prototype.add = function (key,val) {
    this.data[key] = val;
  };

  // Get order information based on customer email
  DataStore.prototype.get = function (key) {
    return this.data[key];
  };

 // Get all customer info
  DataStore.prototype.getAll = function () {
    return this.data;
  };

  // Remove key/value pair from DataStore
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
