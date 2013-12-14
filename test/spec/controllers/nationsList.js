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

  it('must return status', function () {
    expect(scope.status).toBeDefined();
  });

  it('status need to be true', function () {
    expect(scope.status).toBe(true);
  });

  it('nations must be a defined value', function () {
    expect(scope.nations.length).toBe(3);
  });

  describe('all nations must have', function () {
    it('name', function () {
      angular.forEach(scope.nations, function(nation){
        expect(nation.name).toBeDefined();
      });
    });

    it('capital', function(){
      angular.forEach(scope.nations, function(nation){
        expect(nation.density).toBeDefined();
      });
    });

    it('area', function(){
      angular.forEach(scope.nations, function(nation){
        expect(nation.density).toBeDefined();
      });
    });

    it('area is integer', function(){
      angular.forEach(scope.nations, function(nation){
        expect(nation.area).toMatch(/\d{1,}/);
      });
    });

    it('population', function(){
      angular.forEach(scope.nations, function(nation){
        expect(nation.population).toBeDefined();
      });
    });

    it('population is integer', function(){
      angular.forEach(scope.nations, function(nation){
        expect(nation.population).toMatch(/\d{1,}/);
      });
    });

    it('selected', function(){
      angular.forEach(scope.nations, function(nation){
        expect(nation.selected).toBeDefined();
      });
    });

    it('density', function(){
      angular.forEach(scope.nations, function(nation){
        expect(nation.density).toBeDefined();
      });
    });

    it('density have right value', function(){
      expect(scope.nations[0].density).toBe(5);
      expect(scope.nations[1].density).toBe(1);
      expect(scope.nations[2].density).toBe(0.2);
    });

  });
});
