'use strict';

angular.module('sandboxCoop4App')
  .controller('AdminCtrl', function ($http, $scope, Auth, User, $location) {
    $http.get('/api/admin/showAllUsers').success(function(data) {
      $scope.userList = data;
    });
  });