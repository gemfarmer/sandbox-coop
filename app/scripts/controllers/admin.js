'use strict';

angular.module('sandboxCoop4App')
  .controller('AdminCtrl', function ($http, $scope, Auth, User, $location) {
    $http.get('/api/admin/showAllUsers').success(function(data) {
      $scope.userList = data;
      $scope.editRole = function ($index){
        $scope.toggleRole = !$scope.toggleRole;
        $scope.indexOfRole = $index;
        $scope.$watch('userList', function(choice) {
            User.update({id:choice[$index]._id, role:choice[$index].role})

        }, true);

      } // end editRole()

    });


  });
