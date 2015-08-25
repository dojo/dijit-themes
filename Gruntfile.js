/* global module */
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // install dojo deps
    'bower-install-simple': {
      options: {
        color: true,
        directory: './'
      },
      main: {
        options: {
          production: false
        }
      }
    },

    // compile css
    stylus: {
      flat: {
        files: [{
          cwd: 'dijit/themes/flat',
          dest: 'dijit/themes/flat',
          expand: true,
          ext: '.css',
          src: ['**/*.styl', '!**/mixins.styl', '!**/variables.styl']
        }],
        options: {
          compress: false,
          linenos: false
        }
      }
    },

    // connect and open dev app and watch for .styl changes
    connect: {
      tester: {
        options: {
          port: 3000,
          base: './',
          hostname: '*'
        }
      },
    },

    open: {
      tester: {
        path: 'http://localhost:3000/dijit/themes/themeTester.html'
      },
      flat: {
        path: 'http://localhost:3000/dijit/themes/flat/flat_test.html'
      }
    },

    watch: {
      flat: {
        files: ['dijit/themes/flat/**/*.styl'],
        tasks: ['newer:stylus:flat']
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-bower-install-simple');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('flat', [
    'stylus:flat',
    'connect:tester',
    'open:flat',
    'watch:flat'
  ]);
};
