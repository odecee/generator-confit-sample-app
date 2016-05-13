module.exports = function (grunt) {
  'use strict';

  grunt.extendConfig({
    tslint: {
      options: {
        configuration: 'config/verify/tslint.json'
      },
      all: {
        files: {
          src: [
            'src/**/*.ts',
            'config/**/*.ts',
            '!src/modules/**/demoModule/'
          ]
        }
      }
    },
    stylint: {
      all: {
        options: {
          configFile: 'config/verify/.stylintrc'
        },
        src: [
            'src/**/*.styl'
          ]
      }
    },
    watch: {
      verify: {
        options: {
          spawn: true
        },
        files: [
            'src/**/*.ts',
            'config/**/*.ts',
            '!src/modules/**/demoModule/',
            'src/**/*.styl'
          ],
        tasks: [
            'newer:tslint:all',
            'newer:stylint:all'
          ]
      }
    }
  });

  grunt.registerTask('verify', 'Run all the verify tasks', [
  'tslint:all',
  'stylint:all'
]);
};
