module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          verbose: true,
          cleanTargetDir: true,
          layout: 'byComponent',
          // copy: false,
          targetDir: 'public/vendor/',
        }
      }
    },
    watch: {
      styles: {
        files: ['frontend/src/stylesheet/*.less'], // which files to watch
        tasks: ['less'],
        options: {
            nospawn: true
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: 'node_modules/bootstrap/less/*.less',
            dest: 'frontend/src/stylesheet/vendor/bootstrap/'
          },
          {
            expand: true,
            flatten: true,
            src: 'node_modules/bootstrap/less/mixins/*.less',
            dest: 'frontend/src/stylesheet/vendor/bootstrap/mixins/'
          }
        ]
      }
    },
    less: {
      development: {
        options: {
          sourceMap: true,
          dumpLineNumbers: 'comments',
          relativeUrls: true
        },
        files: {
          'public/css/styles.css': 'frontend/src/stylesheet/manifest.less',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-preen');
  // grunt.registerTask('default', ['bower:install', 'preen', 'copy:bower']);
  grunt.registerTask('default', ['bower:install', 'copy', 'less']);
};
