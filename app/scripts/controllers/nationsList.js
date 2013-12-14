'use strict';

angular.module('compare2App')
  .controller('NationslistCtrl', ['$scope', '$http', function (scope, http) {
    http.get('/data/nations.json')
      .success( function(data) {
        scope.nations = data;
      })
      .error( function() {
        console.log("Error");
      });
  }]);
