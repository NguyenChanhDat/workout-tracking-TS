module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-run'
  grunt.loadNpmTasks 'grunt-terser'

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    terser:
      options:
        mangle: true
        compress: true
        sourceMap: true 
        
      dist:
        files: [
          expand: true
          cwd: 'dist/src'
          src: ['**/*.js']
          dest: 'build'
          ext: '.min.js'
        ]

    run:
      install:
        exec: 'npm install'

      build:
        cmd: 'npm'
        args: [
          'run'
          'unit-test'
        ]

      typecheck:
        cmd: 'npm'
        args: [
          'run'
          'typecheck'
        ]

      test_unit:
        cmd: 'npm'
        args: [
          'run'
          'unit-test'
        ]

  grunt.registerTask 'run-build', ['run:build']
  grunt.registerTask 'default', 'run-build', ['run:build']
  
  grunt.registerTask 'minify', ['terser']
  grunt.registerTask 'run-install', ['run:install']
  grunt.registerTask 'run-typecheck', ['run:typecheck']
  grunt.registerTask 'run-test_unit', ['run:test_unit']
