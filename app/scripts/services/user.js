'use strict';

angular.module('sandboxCoop4App')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id', {
      id: '@id'
    }, { //parameters default
      update: {
        method: 'PUT',
        params: {
          role: '@role'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
