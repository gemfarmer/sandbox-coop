'use strict';

angular.module('sandboxCoop4App')
  .controller('AdminCtrl', function ($http, $scope, Auth, User, $location) {
    $http.get('/api/admin/showAllUsers').success(function(data) {
      $scope.userList = data;
      $scope.editRole = function ($index){
        $scope.toggleRole = !$scope.toggleRole;
        $scope.indexOfRole = $index;
        $scope.$watch('userList', function(choice) {
            console.log(choice[$index]._id)

            // $http.put('/api/users/:id', {id:choice[$index]._id, role:choice[$index].role}).success(function (data) {
            //     console.log("response",data)
            // });
            User.update({id:choice[$index]._id, role:choice[$index].role})



            // return User.update({
            //   _id:choice[$index]._id,
            //   role:choice[$index].role
            // }).$promise;
            // User.get({id:choice[$index]._id},function(data) {
            //         console.log(data)
            //         console.log("data role before: ",data.profile.name,data.profile.role)
            //        // $scope.data = data;

            //        data.profile.role = choice[$index].role;
            //         console.log("data role after: ",data.profile.role)
            //        return data

            //        // data.$save()
            //     // });

            // // var user = User.get({id:choice[$index]._id}, function() {

            // });


            // console.log("updated",updatedUser)
            // updatedUser.$save(function(data,err){
            //   console.log(data,err)
            // });

            // user.role = choice[$index].role;
            // user.$save();
            // console.log("user",user,"user profile", user.profile)
            // user.profile.role = choice[$index].role;
            // user.$save();
        }, true);

      } // end editRole()

    });


  });
