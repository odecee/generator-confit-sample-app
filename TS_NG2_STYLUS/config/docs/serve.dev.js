'use strict';

// START_CONFIT_GENERATED_CONTENT
const devServer = require('swanky-server').devServer;

let devServerInstance = devServer(__dirname + '/../../docs/swanky.config.yaml');
// END_CONFIT_GENERATED_CONTENT



// Start swanky dev server
module.exports = devServerInstance;
