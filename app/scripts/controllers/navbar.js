'use strict';

angular.module('sandboxCoop4App')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Calendar',
      'link': '/calendar'
    },
    {
      'title': 'Map',
      'link': '/map'
    },
    {
      'title': 'Shop',
      'link': '/shop'
    }];

    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
