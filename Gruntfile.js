module.exports = function (grunt) {
	'use strict';

    grunt.loadNpmTasks('grunt-typescript');
    // grunt.loadNpmTasks('grunt-contrib-watch');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		typescript: {
			base: {
				src: ['app/assets/ts/*.ts'],
				dest: 'app/assets/javascripts',
				options: {
					target: 'es5', //or es3
					module: 'amd', //or commonjs
					base_path: 'app/assets/ts',
					sourcemap: true,
					fullSourceMapPath: true,
					declaration: true
				}
			}
		}

		// watch: {
		// 	files: '**/*.ts',
		// 	tasks: ['typescript']
		// }
	});

	grunt.registerTask('default', ['typescript']);

};
