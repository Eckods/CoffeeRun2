(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    // Retreive element from the DOM
    // Throws error if elements were not found that match with selector
    this.$formElement = $(selector);
    if (this.$formElement.length == 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function (event) {
      event.preventDefault();

      // Store values of each element of form
      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      // Clear form
      this.reset();
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.addInputHander = function (fn) {
    console.log('Settings input handler for form');
    this.$formElement.on('input', '[name="emailAddress"]', function (event) {
      var emailAddress = event.target.value;
      // Display an error message if invalid email address
      if (fn(emailAddress)) {
        event.target.setCustomValidity('');
      } else {
        message = emailAddress + ' is not an authorized email address!';
        event.target.setCustomValidity(message);
      }
    });
  }

  $("#payment-form").on('submit', function (event) {
    event.preventDefault();

    // Store values of each element of form
    var data = {};
    $(this).serializeArray().forEach(function (item) {
      data[item.name] = item.value;
      console.log(item.name + ' is ' + item.value);
    });
    console.log(data);

    $("#payMsg").text("Thank you for your payment " + data.title + " " + data.username)
    // Close the modal
    $("#popup").modal({});

    // Clear form
    this.reset();
    this.elements[0].focus();
  });


  App.FormHandler = FormHandler;
  window.App = App;

})(window);
