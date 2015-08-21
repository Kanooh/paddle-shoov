'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

var capabilities = {
 'browser' : 'Firefox',
 'browser_version' : '27.0',
 'os' : 'Windows',
 'os_version' : '7',
 'resolution' : '1280x1024'
};

var testName = 'browserstack';
var baseUrl = process.env.base_url || undefined;

if (typeof baseUrl === 'undefined') {
  throw new Error('Base url not defined.');
}

describe('Kanooh test', function() {

  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, capabilities);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('Should show the frontpage', function(done) {
    client
      .url(baseUrl)
      .webdrivercss(testName, {
        name: 'frontpage'
      }, shoovWebdrivercss.processResults)
      .call(done);
  });

});
