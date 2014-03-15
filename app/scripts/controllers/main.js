'use strict';

angular.module('sandboxCoop4App')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $http.get('/api/contributorData').success(function(contributorData) {
    	console.log(contributorData)
      $scope.contributorData = contributorData;
    });
  });
