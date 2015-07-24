'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

var capabilities = {
 'browser' : 'Firefox',
 'browser_version' : '27.0',
 'os' : 'Windows',
 'os_version' : '7',
 'resolution' : '1280x1024'
}

var testName = 'browserstack';

describe('Kanooh test', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, capabilities);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('Should show the frontpage', function(done) {
    client
      .url('http://www.kanooh.be')
      .webdrivercss(testName, {
        name: 'frontpage'
      }, shoovWebdrivercss.processResults)
      .call(done);
  });

});
