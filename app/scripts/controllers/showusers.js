// 'use strict';

angular.module('sandboxCoop4App')
  .controller('ShowusersCtrl', function ($scope, User, Auth) {

	$scope.currentUser = Auth.currentUser();
	console.log($scope.currentUser)
	// if ( currentUser.role == 'userAdminAnyDatabase' ) {

	// }

  });