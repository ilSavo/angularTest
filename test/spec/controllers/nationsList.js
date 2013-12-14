'use strict';

describe('Controller: NationslistCtrl', function () {

  // load the controller's module
  beforeEach(module('compare2App'));

  var NationslistCtrl,
    scope,
    httpBackend,
    http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    http = $http;

    httpBackend
      .when('GET', '/data/nations.json', {})
      .respond(function(method, url, data, headers) {
        return [
          200,
          [
            {'name': 'nation1', 'area': '100', 'population': '500', 'capital': 'Capital 1'},
            {'name': 'nation2', 'area': '200', 'population': '1000', 'capital': 'Capital 2'},
            {'name': 'nation3', 'area': '300', 'population': '1500', 'capital': 'Capital 3'},
          ],
          {}
        ];
      });

    NationslistCtrl = $controller('NationslistCtrl', {
      $scope: scope,
      $http: http
    });

    httpBackend.flush();

  }));

  it('must return nations', function () {
    expect(scope.nations).toBeDefined();
  });

});
