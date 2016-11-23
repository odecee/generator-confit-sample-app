'use strict';

// START_CONFIT_GENERATED_CONTENT
const glob = require('glob');
const path = require('path');
const BASE_URL = 'https://localhost:3000/';
const OUTPUT_DIR = '../../reports/visualTest/';
const REFERENCE_DIR = '../../vrt/image/';

let config = {
  viewports: [
    {
      name: 'desktop',
      width: 1280,
      height: 1024
    },
    {
      name: 'phone',
      width: 320,
      height: 480
    },
    {
      name: 'tablet_v',
      width: 568,
      height: 1024
    },
    {
      name: 'tablet_h',
      width: 1024,
      height: 768
    }
  ],
  paths: {
    'bitmaps_reference': `${REFERENCE_DIR}`,  // This folder should be in source control!
    'bitmaps_test': `${OUTPUT_DIR}bitmaps_test`,
    'compare_data': `${OUTPUT_DIR}bitmaps_test/compare.json`,
    'casper_scripts': `../../config/testVisualRegression/scripts`,
    'ci_report' :  `${OUTPUT_DIR}/junit`
  },
  ci: {
    format: 'junit',
    testReportFileName: vis-reg-unit.xml
    testSuiteName:  'backstopJS'
  }
  engine: 'phantomjs',
  report: ['CLI', 'browser', 'CI'],
  casperFlags: [
    '--ignore-ssl-errors=true',
    '--ssl-protocol=any'
  ],
  debug: false,
  port: 3002
};
const scenarioDefaultConfig = {
  readyEvent: null,
  delay: 500,
  misMatchThreshold: 0.1
};
let scenarioFiles = glob.sync('../../src/**/visualTest/*.?(js|json)');
let scenarios = [];

scenarioFiles.forEach((scenarioPath) => {
  let scenario = require(`${scenarioPath}`);

  scenario = Object.assign({}, scenarioDefaultConfig, scenario, {url: `${BASE_URL}${scenario.url}`});
  scenarios.push(scenario);
});

config.scenarios = scenarios;
// END_CONFIT_GENERATED_CONTENT


module.exports = config;
