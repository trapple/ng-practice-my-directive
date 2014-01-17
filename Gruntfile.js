module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      dev: {
        options: {
          base: "./app/"
        }
      }
    },
    watch: {
      dev: {
        files: ['app/*', 'spec/*.js'],
        tasks: ['jasmine']
      },
      options: {
        livereload: true
      }
    },
    jasmine: {
      "my-directive": { 
        src: 'app/js/my-directive.js',
        options:{
          specs: 'spec/*.js',
          vendor: ['app/js/angular.min.js', 'app/js/angular-mocks.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');

  grunt.registerTask("default", ["connect", "watch:dev"]);
};
