'use strict';

angular.module('sandboxCoop4App')
  .controller('SettingsCtrl', function ($scope, User, Auth) {
    $scope.errors = {};

    $scope.changePassword = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
        });
      }
		};
    $scope.changeAdminStatus = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var currentUser = Auth.currentUser();
        console.log("currentUser", currentUser)
        // if (currentUser.role == "userAdminAnyDatabase"){

        // }
        // else
      }
    }
  });
