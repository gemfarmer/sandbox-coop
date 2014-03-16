'use strict';

angular.module('sandboxCoop4App')
  .controller('AdminCtrl', function ($http, $scope, Auth, User, $location) {
    console.log("$http: ",$http)
    $http.get('/api/admin/showAllUsers').success(function(data) {
      console.log("adminData: ",data)
      console.log("dataONe",data[0].name)
      $scope.userList = data;
    });
  });