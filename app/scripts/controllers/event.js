  'use strict'


  angular.module('sandboxCoop4App')
  .controller('EventCtrl', function ($scope, $timeout, $rootScope, $http) {
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
        $scope.timeStart = value;
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


      //////////////////////////////////////
      /// TimePicker

      $scope.timeStart = $scope.start
      $scope.timeEnd = $scope.end

      $scope.hstep = 1;
      $scope.mstep = 30;

      $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
      };

      $scope.ismeridian = true;
      $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
      };

      $scope.update = function() {
        var d = new Date();
        d.setHours( 14 );
        d.setMinutes( 0 );
        $scope.timeStart = d;
      };

      $scope.changed = function () {
        console.log('Time changed to: ' + $scope.timeStart);
        $scope.start = $scope.timeStart
        $scope.end = $scope.timeEnd
      };

      $scope.clearTime = function() {
        $scope.timeStart = null;
      };



      /// Create New Event


      $scope.createNewEvent = function () {
        var eventObj = {
          ownerId: $rootScope.currentUser,
          type: $scope.titleOfEvent,
          title: $scope.typeOfEvent,
          start: $scope.start,
          end: $scope.end,
          allDay: $scope.allDay,
          repeatEvent: $scope.repeatEvent,
          location: $scope.eventLocation,
          url: $scope.eventUrl
        }
        console.log(eventObj)
        $http.post('/api/event', eventObj).success(function (data) {
          return data
        }).error(function(data, status, headers, config) {
            return data
        }).$promise;
        // $http.post('/api/event').success(function(data) {
        //   return Event.save({
        //   ownerId: $rootScope.currentUser,
        //   type: $scope.titleOfEvent,
        //   title: $scope.typeOfEvent,
        //   start: $scope.start,
        //   end: $scope.end,
        //   allDay: $scope.allDay,
        //   repeatEvent: $scope.repeatEvent,
        //   location: $scope.eventLocation,
        //   url: $scope.eventUrl
        // }).$promise;
      }




  });