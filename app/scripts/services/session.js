'use strict';

angular.module('sandboxCoop4App')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
