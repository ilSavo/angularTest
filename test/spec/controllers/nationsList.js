'use strict';

describe('Controller: NationslistCtrl', function () {

  // load the controller's module
  beforeEach(module('compare2AppApp'));

  var NationslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NationslistCtrl = $controller('NationslistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
