'use strict';

/**
 * @ngdoc function
 * @name toddwincStrapApp.controller:ActivitiesCtrl
 * @description
 * # ActivitiesCtrl
 * Controller of the toddwincStrapApp
 */
angular.module('toddwincStrapApp')
  .controller('ActivitiesCtrl', ['$scope','$http','twContent',function ($scope,$http,twContent) {
  	$scope.foo='foo';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.some=twContent.someMethod();
	if(!twContent.iscached()){
		twContent.getstartups()
			.success(function(startups){
				$scope.startups=startups;
			})
		.error(function(){
			//$modal({title: 'Unable to Fetch Content', content: twContent.errorMessage(), show: true});
			console.log('retrieval failed for startups');
		});
	} else {
		$scope.startups=twContent.getstartupCache();
	}
  }]);
