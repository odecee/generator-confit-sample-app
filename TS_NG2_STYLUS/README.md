<!--[RM_HEADING]-->
# ts-ng-2-stylus

<!--[]-->
<!--[RM_DESCRIPTION]-->
> A description of my awesome package

<!--[]-->

<!--[RM_BADGES]-->
[![NPM Version](https://img.shields.io/npm/v/ts-ng-2-stylus.svg?style=flat-square)](http://npm.im/ts-ng-2-stylus)
[![Coverage Status](https://coveralls.io/repos/github/entity/repo/badge.svg?branch=master)](https://coveralls.io/github/entity/repo?branch=master)
[![Dependencies status](https://david-dm.org/entity/repo/status.svg?theme=shields.io)](https://david-dm.org/entity/repo#info=dependencies)
[![Dev-dependencies status](https://david-dm.org/entity/repo/dev-status.svg?theme=shields.io)](https://david-dm.org/entity/repo#info=devDependencies)


<!--[]-->

<!--[RM_INSTALL]-->
## Install

    npm install ts-ng-2-stylus


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
- [ ] Add a new module to `src/modules/`
- [ ] Run `npm start`, change the stylesheet and see the changes appear immediately
- [ ] Run `npm test` to execute the unit tests and see the test coverage
- [ ] Run `npm start && test:system` to execute the browser tests
- [ ] Run `git cz` to commit changes with a conventional commit message


<!--[]-->

<!--[RM_LICENSE]-->
## License

This software does not have a license.


<!--[]-->

