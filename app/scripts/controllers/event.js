  'use strict'


  angular.module('sandboxCoop4App')
  .controller('EventCtrl', function ($scope, $timeout) {
      $scope.today = function() {
        $scope.start = new Date();
        // console.log("Today: ",$scope.start)
      };
      $scope.today();
      // console.log("$scope.start: ",$scope.start)

      $scope.end = new Date();
      // console.log("$scope.end: ",$scope.end)

      var today = new Date();
      $scope.aYearFromToday = today.setDate(today.getDate() + (30*12) ); // One year out
      // console.log("$scope.aYearFromToday: ",$scope.aYearFromToday)

      $scope.minStartDate = $scope.start; //fixed date
      // console.log("$scope.minStartDate: ",$scope.minStartDate)
      $scope.maxStartDate = new Date('11/20/18'); //init value
      // console.log("$scope.maxStartDate: ",$scope.maxStartDate)
      $scope.minEndDate = $scope.end; //init value
      // console.log("$scope.minEndDate: ",$scope.minEndDate)
      $scope.maxEndDate = new Date('11/20/18'); //fixed date same as $scope.maxStartDate init value
      // console.log("$scope.maxEndDate: ",$scope.maxEndDate)

      $scope.$watch('start', function(value){
        $scope.minEndDate = value;
      });
      // $scope.$watch('end', function(value){
      //   $scope.maxStartDate = value;
      //   console.log("$scope.maxStartDate updated: ",$scope.maxStartDate)
      // });

      $scope.showWeeks = true;
      $scope.toggleWeeks = function () {
        $scope.showWeeks = ! $scope.showWeeks;
      };

      // $scope.clear = function () {
      //   $scope.dt = null;
      // };

      // Disable weekend selection
      $scope.disabled = function(date, mode) {

        // return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      };

      $scope.toggleMin = function() {
        $scope.minDate = ( $scope.minDate ) ? null : new Date();
      };
      $scope.toggleMin();

      // $scope.open = function($event) {
      //   $event.preventDefault();
      //   $event.stopPropagation();

      //   $scope.opened = true;
      // };

      $scope.openStart = function() {
        $timeout(function() {
          $scope.startOpened = true;
        });
      };

      $scope.openEnd = function() {
        $timeout(function() {
          $scope.endOpened = true;
        });
      };

      $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
        // 'minDate': -20,
        // 'maxDate': "+1M +10D"
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
      $scope.format = $scope.formats[0];
  });