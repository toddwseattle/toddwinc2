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
	
	$scope.hasLogo=function(element){
		if(!angular.isUndefined(element.logo)&&element.logo.length>0){
			return true;
		} else {
			return false;
		}
	};
    $scope.some=twContent.someMethod();
	if(!twContent.iscached()){
		twContent.getstartups()
			.success(function(startups){
				$scope.startups=twContent.getstartupCache();
				$scope.courses=twContent.getcoursesCache();
				$scope.nonprofits=twContent.getnonprofitsCache();
				$scope.startups.activePanels=[];
				$scope.courses.activePanels=[];
				$scope.nonprofits.activePanels=[];
			})
		.error(function(){
			//$modal({title: 'Unable to Fetch Content', content: twContent.errorMessage(), show: true});
			console.log('retrieval failed for startups');
		});
	} else {
		$scope.startups=twContent.getstartupCache();
		$scope.courses=twContent.getcoursesCache();
		$scope.nonprofits=twContent.getnonprofitsCache();
		$scope.startups.activePanels=[];
	$scope.courses.activePanels=[];
	$scope.nonprofits.activePanels=[];
	}
	
	$scope.openAllPanels=function(panels){
		if(panels.activePanels.length>=panels.length)
			{ return;
			} else {
				panels.activePanels=[];
			}
		for (var i = 0; i < panels.length; i++) {
			panels.activePanels.push(i);
		}
	};

  }]);
