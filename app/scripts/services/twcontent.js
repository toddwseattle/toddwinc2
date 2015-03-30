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
        courses=[],
        angel=[],
        nonprofits=[],
        nu=[],
        cached=false;

    function getStartups(){
          return $http.get('/data/activities.json')
            .success(function(data){
              angular.forEach(data,function(element){
                if(!angular.isUndefined(element.activetype)){
                  switch(element.activetype){
                    case 'startup' : 
                      startups.push(element);
                      break;
                    case 'course' :
                      courses.push(element);
                      break;
                    case 'nonprofit' :
                      nonprofits.push(element);
                      break;
                    case 'nu' :
                      nu.push(element);
                      break;
                    case 'angel' :
                      angel.push(element);
                      break;
                    default:
                      $log.error('uknown activity type:'+element.activetype);

                  }
                }else{
                  $log.error('no activity type for element : '+element.toString());
                }

              });
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
      getcoursesCache :function(){
        return courses;
      },
      getnonprofitsCache :function(){
        return nonprofits;
      },
      iscached : function(){ return(cached); },
      errorMessage : function(){ return(errorMsg); }
    }; //return factory twContent

  }]);
