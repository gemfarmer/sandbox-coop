  'use strict'


  angular.module('sandboxCoop4App')
  .controller('EventCtrl', function ($scope, $timeout) {
      $scope.today = function() {
        $scope.start = new Date();
      };
      $scope.today();

      $scope.start = $scope.today();
      $scope.end = new Date();

      var today = new Date();
      console.log(today)
      $scope.aYearFromToday = today.setDate(today.getDate() + (30*12) ); // One year out

      $scope.minStartDate = $scope.start; //fixed date
      $scope.maxStartDate = new Date('11/20/18'); //init value
      $scope.minEndDate = $scope.end; //init value
      $scope.maxEndDate = new Date('11/20/18'); //fixed date same as $scope.maxStartDate init value

      $scope.$watch('start', function(v){
        $scope.minEndDate = v;
      });
      $scope.$watch('end', function(v){
        $scope.maxStartDate = v;
      });

      $scope.showWeeks = true;
      $scope.toggleWeeks = function () {
        $scope.showWeeks = ! $scope.showWeeks;
      };

      // $scope.clear = function () {
      //   $scope.dt = null;
      // };

      // Disable weekend selection
      $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
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