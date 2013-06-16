module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'styles/app.css': 'scss/app.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

};
