module.exports = function(grunt) {

  //构建任务配置
  grunt.initConfig({
    //读取package.json的内容，形成个json数据
    pkg: grunt.file.readJSON('package.json'),

    //合并文件任务
    concat: {
      //文件头部输出信息
      options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>  author:tangzq*/\n'
      },
      dist: {
        src: 'src/js/*.js',
        dest: 'dist/js/app.js'
        //dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    //压缩文件任务
    uglify: {
      //文件头部输出信息
      options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>  author:tangzq*/\n'
      },
      dist: {
        options: {report: "gzip"},
           //src: 'dist/js/<%= pkg.name %>.js',
           src: 'dist/js/app.js',
           dest: 'dist/js/app.min.js'
      }
    },
  });

  // 加载包含 "uglify","concat"的任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat', 'uglify']);

};