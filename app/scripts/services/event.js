'use strict';

angular.module('sandboxCoop4App')
  .factory('Event', function ($resource) {
    return $resource('/api/event/:id', {
      id: '@id'
    }, { //parameters default
      update: {
        method: 'PUT',
        params: {
          // role: '@role'
        }
      },
      get: {
        method: 'GET',
        params: {
          // id:'me'
        }
      }
	  });
  });
