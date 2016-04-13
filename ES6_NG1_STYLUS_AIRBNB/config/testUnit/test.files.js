'use strict';

// START_CONFIT_GENERATED_CONTENT
// Polyfill required for PhantomJS
require('phantomjs-polyfill');

// Load the test dependencies!
require('angular');
require('angular-mocks');
require('angular-route');

// Don't load any source code! The unit tests are responsible for loading the code-under-test.
// Includes the *.spec.<ext> files in the unitTest directory. The '../../' is the relative path from where
// this file is (config/testUnit/) to where the source folders are.
var testsContext = require.context('../../src/modules', true, /unitTest\/.*spec\.(js)$/);
testsContext.keys().forEach(testsContext);
// END_CONFIT_GENERATED_CONTENT
