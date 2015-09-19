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
          cwd: 'flat',
          dest: 'flat',
          expand: true,
          ext: '.css',
          src: ['**/*.styl', '!**/mixins.styl', '!**/variables.styl', '!**/**variables.styl']
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
      flat: {
        options: {
          port: 3000,
          base: './',
          hostname: '*'
        }
      }
    },

    open: {
      tester: {
        path: 'http://localhost:3000/dijit/themes/themeTester.html'
      },
      flat: {
        path: 'http://localhost:3000/flat/tests/flat.html'
      }
    },

    watch: {
      tester: {
        files: ['*'],
        tasks: []
      },
      flat: {
        files: ['flat/**/*.styl', '!flat/variables.styl', '!flat/mixins.styl'],
        tasks: ['newer:stylus:flat']
      },
      'flat-vars': {
        files: ['flat/**/variables.styl', 'flat/**/**variables.styl', 'flat/mixins.styl'],
        tasks: ['stylus:flat']
      }
    },

    concurrent: {
      flat: {
        tasks: ['watch:flat', 'watch:flat-vars'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-bower-install-simple');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-newer');

  // flat theme
  grunt.registerTask('flat', [
    'stylus:flat',
    'connect:flat',
    'open:flat',
    'concurrent:flat'
  ]);

  // default run dijit theme tester
  grunt.registerTask('default', [
    'connect:tester',
    'open:tester',
    'watch:tester'
  ]);
};