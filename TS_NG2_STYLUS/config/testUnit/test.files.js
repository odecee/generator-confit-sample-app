'use strict';
// This file is run inside a Webpack context, which allows it to use require.context() to get a list of files to include at run time

// START_CONFIT_GENERATED_CONTENT
// Polyfill required for PhantomJS
require('phantomjs-polyfill');

// Load the test dependencies!
require('core-js');
require('ts-helpers');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('rxjs');
// Load Angular 2's Jasmine helper methods:
var testing = require('angular2/testing');
var browser = require('angular2/platform/testing/browser');

testing.setBaseTestProviders(
  browser.TEST_BROWSER_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_APPLICATION_PROVIDERS
);

Object.assign(global, testing);



// Don't load any source code! The unit tests are responsible for loading the code-under-test.
// Includes the *.spec.<ext> files in the unitTest directory. The '../../' is the relative path from where
// this file is (config/testUnit/) to where the source folders are.
var testsContext = require.context('../../src/modules', true, __karmaTestSpec);
testsContext.keys().forEach(testsContext);
// END_CONFIT_GENERATED_CONTENT
