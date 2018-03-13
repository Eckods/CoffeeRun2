(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function (key, val) {
    // Create/post a record at server with value data
    // and print the server response
    $.post(this.serverUrl, val, function (serverResponse) {
      console.log(serverResponse);
    });

  /*  $.ajax(this.serverUrl, {
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        coffee: $('#coffeeOrder'),
        emailAddress: $('#emailInput'),
        flavor: $('#flavorShot'),
        size: coffeeOrder.size,
        strength: $('#strengthLevel')
      }),
      success: function(serverResponse) {
        console.log(serverResponse);
      },
      error: function(serverResponse){
        console.log(serverResponse);
      }
    });*/
  };

  RemoteDataStore.prototype.getAll = function (cb) {
    // Retrieve/get all records from server
    // and print the server response
  /*  $.get(this.serverUrl, function (serverResponse) {
      console.log(serverResponse);
      // Orders passed to this callback function
      cb(serverResponse);
    });*/
    $.ajax(this.serverUrl, {
      type: "GET",
      success: function(serverResponse) {
        console.log(serverResponse);
      },
      error: function(serverResponse){
        console.log(serverResponse);
      }
    });
  };

  RemoteDataStore.prototype.get = function (key, cb) {
    // Retrieve/get a specific order from server
    // and print the server response
  /*  $.get(this.serverUrl + '/' + key, function (serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });*/
/*      type: "GET",
      success: function(serverResponse) {
      }
        var data = $(serverResponse).find('#emailAddress').text();
        console.log(data.emailAddress);

      },
      error: function(serverResponse){
        console.log(serverResponse);
      }
    });
*/
  };

  RemoteDataStore.prototype.remove = function (key) {
    // Remove a specific order from server
/*    $.ajax(this.serverUrl + '/' + key, {
      type: 'DELETE'
    });
*/
  /*  var data = GET /this.serverUrl?{"emailAddress" : key}
    console.log(data.id);
    */
    var tempUrl = this.serverUrl;

    $.ajax({
      url: this.serverUrl + '?emailAddress=' + key,
      type: "GET",
      success: function(serverResponse) {
        console.log(serverResponse);
        $.ajax({
              url: tempUrl + '/' + $(serverResponse).attr('id'),
              type: 'DELETE'
            });
      }
    });

  }

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
