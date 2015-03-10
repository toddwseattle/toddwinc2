//'use strict';

describe('Controller: ActivitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('toddwincStrapApp'));

  var ActivitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$httpBackend,$http) {
    scope = $rootScope.$new();
    httpMock= $httpBackend;
    http=$http;

    httpMock.when('GET','/data/activities.json').respond('[{"id" : 1,"activetype" : "activity","name" : "company name"}');
    ActivitiesCtrl = $controller('ActivitiesCtrl', {
      $scope: scope, $http: http
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
  it('should have a list of startups',function(){{
    httpMock.expectGET('/data/activities.json');
    httpMock.flush();
    expect(scope.startups.length).toBeGreaterThan(0);
  }});
});
