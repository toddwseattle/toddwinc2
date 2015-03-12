'use strict';

describe('Service: twContent', function () {

  // load the service's module
  beforeEach(module('toddwincStrapApp'));

  // instantiate service
  var twContent;
  beforeEach(inject(function (_twContent_) {
    twContent = _twContent_;
  }));

  it('should do something', function () {
    expect(!!twContent).toBe(true);
  });

});
