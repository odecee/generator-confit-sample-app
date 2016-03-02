<!--[RM_HEADING]-->
# sample-app

<!--[]-->
<!--[RM_DESCRIPTION]-->
> A description of my awesome package

<!--[]-->

<!--[RM_INSTALL]-->
##Install

    npm install sample-app


<!--[]-->

<!--[RM_DEVELOPMENT_TASKS]-->
##Development Tasks

- `npm run build`: Generate production build into [dist/](dist/) folder
- `npm run build:dev`: Create a development build using Webpack
- `npm run build:prod`: Create a production build using Webpack
- `npm run build:serve`: Generate production build and serve on **https://localhost:3000**
- `npm run dev`: Run project in development mode (verify code, create dev build into dev/ folder, serve on **https://localhost:3000**, watch for changes and reload the browser automatically)
- `npm run serve:prod`: Run a production server using grunt-connect on **https://localhost:3000**
- `npm start`: Alias for `npm run dev` task
- `npm test`: Alias for `npm run test:unit` task
- `npm run test:browser`: Run browser tests against the *development* web server (the development server **must** be running)
- `npm run test:unit`: Run unit tests whenever JS code changes, with code coverage
- `npm run test:unit:debug`: Run unit tests in a browser to make debugging easier (no code coverage)
- `npm run test:unit:once`: Run unit tests once
- `npm run verify`: Verify JS & CSS code style and syntax
- `npm run verify:watch`: Run verify task whenever JS or CSS code changes



<!--[]-->

<!--[RM_BUILD_TOOL_FEATURES]-->
## Build Tool Features




<!--[]-->

<!--[RM_CHANGING_BUILD_TOOL_CONFIG]-->
##Changing build-tool configuration

There are 3 ways you can change the build-tool configuration for this project:

1. BEST: Modify the Confit configuration file ([confit.json](confit.json)) by hand, then re-run `yo confit` and tell it to use the existing configuration.
1. OK: Re-run `yo confit` and provide new answers to the questions. **Confit will attempt to overwrite your existing configuration (it will prompt for confirmation), so make sure you have committed your code to a source control (e.g. git) first**.
  There are certain configuration settings which can **only** be specified by hand, in which case the first approach is still best.
1. RISKY: Modify the generated build-tool config by hand. Be aware that if you re-run `yo confit` it will attempt to overwrite your changes. So commit your changes to source control first.

Additionally, the **currently-generated** configuration can be extended in the following ways:

- The task configuration is defined in [package.json](package.json). It is possible to change the task definitions to add your own sub-tasks.
- The `buildJS.vendorScripts` array in [confit.json](confit.json) is designed to be edited manually. This property should contain NPM module names and/or references to JavaScript files (files must start with `./`). For example: `vendorScripts: ['jquery', './module/path/to/jsFile.js', 'angular2/core',  ...]`
- The `entryPoint.entryPoints` object in [confit.json](confit.json) is designed to be edited manually. It represents the starting-point(s) of the application (like a `main()` function). Normally an application has one entry point, but it is possible to have more than one. `entryPoint.entryPoints` must have at-least one property (e.g. `property: [file]`), where `file` is a list of NPM module names and/or references to JavaScript files (file references must start with `./`);
- `npm start` can be extended by modifying [config/webpack/dev.webpack.config.js](config/webpack/dev.webpack.config.js) and [config/webpack/prod.webpack.config.js](config/webpack/prod.webpack.config.js). Confit will attempt to overwrite the contents files the next time `yo confit` is run, so make sure any modifications are committed to source control first.
- `npm test:browser` can be extended by modifying [config/testBrowser/protractor.conf.js](config/testBrowser/protractor.conf.js). This task uses Protractor to run Jasmine2 test specs (located in `src/modules/**/browserTest/`) against the development web server URL.
- `npm test:unit` can be extended by modifying [config/testUnit/karma.conf.js](config/testUnit/karma.conf.js) and [config/testUnit/karma.common.js](config/testUnit/karma.common.js). [config/testUnit/test.files.js](config/testUnit/test.files.js) is generated from the entry points in the Confit configuration. It is **best** to modify the entry points in [confit.json](confit.json) then re-run `yo confit`.



<!--[]-->

