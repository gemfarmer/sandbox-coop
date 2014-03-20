'use strict';

describe('Controller: ShopCtrl', function () {

  // load the controller's module
  beforeEach(module('sandboxCoop4App'));

  var ShopCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopCtrl = $controller('ShopCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
