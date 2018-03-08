/*
 Run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      main: {
        options: {
          sizes: [{

            name: "large",
            width: 1600,
            suffix: "_2x",
            quality: 40
            
          },{
            name: "small",
            width: 800,
            suffix: "_1x",
            quality: 40
          }]
        },

        files: [{
          expand: true,
          src: ['main.jpeg'],
          cwd: 'images_src/main',
          dest: 'images/'
        }]
      },
      dev: {
        options: {
          sizes: [{

            name: "large",
            width: 760,
            suffix: "_2x",
            quality: 40
            
          },{
            name: "small",
            width: 380,
            suffix: "_1x",
            quality: 40
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,jpeg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
