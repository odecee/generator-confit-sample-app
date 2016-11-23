<!--[RM_HEADING]-->
# es-6-ng-1-stylus-airbnb

<!--[]-->
<!--[RM_DESCRIPTION]-->
> A description of my awesome package

<!--[]-->

<!--[RM_BADGES]-->
[![NPM Version](https://img.shields.io/npm/v/es-6-ng-1-stylus-airbnb.svg?style=flat-square)](http://npm.im/es-6-ng-1-stylus-airbnb)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Coverage Status](https://coveralls.io/repos/github/entity/repo/badge.svg?branch=master)](https://coveralls.io/github/entity/repo?branch=master)
[![Dependencies status](https://david-dm.org/entity/repo/status.svg?theme=shields.io)](https://david-dm.org/entity/repo#info=dependencies)
[![Dev-dependencies status](https://david-dm.org/entity/repo/dev-status.svg?theme=shields.io)](https://david-dm.org/entity/repo#info=devDependencies)


<!--[]-->

<!--[RM_INSTALL]-->
## Install

    npm install es-6-ng-1-stylus-airbnb


<!--[]-->

## Usage

<!--[RM_CONTRIBUTING]-->
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).


<!--[]-->

<!--[RM_NEXT_STEPS]-->
## *Next Steps to Setup your Project*

    Remove this section once you are comfortable updating your project.

- [ ] Update [package.json](package.json) with a nice description, then run `yo confit --skip-install --skip-run` and see the README.md file is updated
- [ ] Add a new **dependency** to your project:
  - For a **source-code** dependency:
    1. `npm i {nodeModule} --save`
    1. Edit [confit.yml](confit.yml) and include {nodeModule} as an item inside the `buildJS.vendorScripts` array
    1. `yo confit` to regenerate your build configuration
  - For a **development** dependency:
    1. `npm i {nodeModule} --save-dev`
    1. Edit the configuration file(s) that will need to use this dependency in the areas of the file that will not be overwritten when `yo confit` is run.
     For example:
     ```js

     // Changes in this region will be preserved.

     // START_CONFIT_GENERATED_CONTENT

       // Changes in this region will be overwritten if `yo confit` is run again.

     // END_CONFIT_GENERATED_CONTENT

     // Changes in this region will be preserved.

     ```
  - For a **test** dependency:
    1. `npm i {nodeModule} --save`
    1. Edit [confit.yml](confit.yml) and include {nodeModule} as an item inside the `testUnit.testDependencies` array
    1. Run `yo confit` to regenerate your build configuration
- [ ] Complete the installation of the **semantic release** tool:
  1. Make sure you have:
    - a GitHub login
    - an NPM login
    - a TravisCI login (though you can still proceed if you use a different CI tool)
  1. Run `semantic-release-cli setup` to complete the installation
- [ ] Add a new module to `src/modules/`
- [ ] Run `npm start`, change the stylesheet and see the changes appear immediately
- [ ] Run `npm test` to execute the unit tests and see the test coverage
- [ ] Run `npm start && test:system` to execute the browser tests
- [ ] Run `git cz` to commit changes with a conventional commit message


<!--[]-->

<!--[RM_LICENSE]-->
## License

This software is licensed under the MIT Licence. See [LICENSE](LICENSE).

<!--[]-->

