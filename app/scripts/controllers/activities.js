'use strict';

/**
 * @ngdoc function
 * @name toddwincStrapApp.controller:ActivitiesCtrl
 * @description
 * # ActivitiesCtrl
 * Controller of the toddwincStrapApp
 */
angular.module('toddwincStrapApp')
  .controller('ActivitiesCtrl', ['$scope','$http',function ($scope,$http) {
  	$scope.foo="foo";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('/data/activities.json').
  success(function(data, status, headers, config) {
  	  $scope.startups=data;
  	  console.log('$scope.startups',$scope.startups);
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
  	$scope.startups="error"
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  }]);
