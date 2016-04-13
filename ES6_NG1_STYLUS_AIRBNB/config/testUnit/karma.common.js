// Global karma config
'use strict';

// START_CONFIT_GENERATED_CONTENT

// We want to re-use the loaders from the dev.webpack.config
var webpackConfig = require('./../webpack/dev.webpack.config.js');


var karmaConfig = {
  autoWatch: true,

  // base path, that will be used to resolve files and exclude
  basePath: '../../',

  // testing framework to use (jasmine/mocha/qunit/...)
  frameworks: ['jasmine'],

  // list of files / patterns to exclude
  exclude: [],

  // web server default port
  port: 8081,

  // Start these browsers, currently available:
  // - Chrome, ChromeCanary, Firefox, Opera, Safari (only Mac), PhantomJS, IE (only Windows)
  browsers: [
    'PhantomJS'
  ],

  plugins: [
    'karma-phantomjs-launcher',
    'karma-jasmine',
    'karma-junit-reporter',
    'karma-coverage',
    'karma-chrome-launcher',
    require('karma-webpack'),
    'karma-spec-reporter',
    'karma-sourcemap-loader'
  ],

  files: [
    'node_modules/phantomjs-polyfill/bind-polyfill.js',
    'config/testUnit/test.files.js'
  ],

  preprocessors: {
    'config/testUnit/test.files.js': ['webpack']
  },


  reporters: ['progress', 'junit', 'coverage'],

  coverageReporter: {
    dir: 'reports/coverage',
    reporters: [
      { type: 'cobertura', subdir: 'cobertura' },
      { type: 'lcovonly', subdir: 'lcov' },
      { type: 'html', subdir: 'html' },
      { type: 'json', subdir: 'json' },
      { type: 'text' }
    ]
  },

  junitReporter: {
    outputDir: 'reports/unit/'
  },



  webpack: {
    module: {
      preLoaders: [
        // instrument only testing sources
        {
          test: /src\/modules\/.*\.(js)$/,
          loader: 'isparta-instrumenter-loader',
          exclude: [
            /node_modules|unitTest\/|browserTest\//
          ],
          query: {
            'babel': {
              'presets': [
                'es2015'
              ]
            }
          }
        }
      ],
      loaders: webpackConfig.module.loaders
    },
    plugins: webpackConfig.plugins,
    resolve: webpackConfig.resolve
  },

  webpackServer: {
    noInfo: true
  },

  singleRun: false,
  colors: true
};
// END_CONFIT_GENERATED_CONTENT

module.exports = karmaConfig;
