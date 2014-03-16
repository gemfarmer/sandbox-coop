'use strict';

angular.module('sandboxCoop4App')
  .factory('UpdateUser', function ($resource) {
    return $resource('/api/users/:id', {
      id: '@id'
    });
  });
