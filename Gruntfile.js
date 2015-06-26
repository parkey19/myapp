module.exports = function(grunt) {
    // 작업을 위한 설정
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'app.js',
                dest: 'build/app.min.js'
            }
        }
    });

    // "uglify" 작업을 위한 플러그인 등록
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 기본 작업에 'uglify' 등록
    grunt.registerTask('default', ['uglify']);
};