'use strict';

/**
 * @ngdoc service
 * @name toddwincStrapApp.twContent
 * @description
 * # twContent
 * Factory in the toddwincStrapApp.
 */
angular.module('toddwincStrapApp')
  .factory('twContent',['$http','$log', function ($http,$log) {
    // Service logic
    // ...

    var meaningOfLife = 42,
        errorMsg='No Error',
        startups=[],
        cached=false;

    function getStartups(){
          return $http.get('/data/activities.json')
            .success(function(data){
              startups=data;
              $log.info('data:'+data);
              cached=true;
            });
    }


    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getstartups: getStartups,
      getstartupCache : function(){
          return startups;
      },
      iscached : function(){ return(cached); },
      errorMessage : function(){ return(errorMsg); }
    }; //return factory twContent

  }]);
