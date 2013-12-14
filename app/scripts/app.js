'use strict';

angular.module('compare2App', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/nation.html',
        controller: 'NationslistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
