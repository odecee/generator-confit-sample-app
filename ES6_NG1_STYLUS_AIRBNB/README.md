<!--[RM_HEADING]-->
# es-6-ng-1-stylus-airbnb

<!--[]-->
<!--[RM_DESCRIPTION]-->
> A description of my awesome package

<!--[]-->

<!--[RM_INSTALL]-->
## Install

    npm install es-6-ng-1-stylus-airbnb


<!--[]-->

<!--[RM_DIR_STRUCTURE]-->
## Directory Structure

Code is organised into modules which contain one-or-more components. This a great way to ensure maintainable code by encapsulation of behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
es-6-ng-1-stylus-airbnb/
 ├──config/                       * configuration files live here (e.g. grunt, webpack, verify, testUnit)
 │
 ├──src/                          * source code files should be here
 │   └──modules/                  * all source code modules|components|features should appear as sub-directories under this directory
 │       ├──common/               
 │       ├──featureA/             
 │       └──featureB/             
 │           ├──assets/           
 │           │   ├──font          * fonts for this module
 │           │   └──img           * images for this module
 │           ├──styles/           * css source code for this module
 │           ├──template/         * HTML templates for this module
 │           ├──unitTest/         * unit test specs for this module
 │           └──browserTest/      * browser test specs for this module
 │
 ├──dev/                          * development-build code is output here (Webpack may keep it in memory for speed)
 ├──dist/                         * production-build code is output here
 │   ├──assets/                   * all assets appear here, under module sub-folders. e.g.:
 │   │   └──featureB/             
 │   │       ├──font              
 │   │       └──img               
 │   ├──css/                      * compiled CSS files
 │   ├──js/                       * minified JS files
 │   ├──vendor/                   * minified vendor JS files
 │   └──views/                    * minified HTML files
 │
 ├──reports/                      * test reports appear here
 │
 ├──CONTRIBUTING.md               * how to contribute to the repo
 ├──README.md                     * this file
 └──package.json                  * what NPM uses to manage it's dependencies
```


<!--[]-->

## Usage

<!--[RM_CONTRIBUTING]-->
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).


<!--[]-->

<!--[RM_LICENSE]-->
## License

This software is licensed under the MIT Licence. See [LICENSE](LICENSE).

<!--[]-->

