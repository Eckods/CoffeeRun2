(function (window) {
  'use strict';
  var App = window.App || {};

  var Validation = {
    isCompanyEmail: function(email) {
      // Valid emails must end with @bignerdranch
      // Test method returns t/f based on if input matches
      return /.+@bignerdranch\.com$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
