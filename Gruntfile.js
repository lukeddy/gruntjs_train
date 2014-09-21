module.exports = function(grunt) {

  //构建任务配置
  grunt.initConfig({
    //读取package.json的内容，形成个json数据
    pkg: grunt.file.readJSON('package.json'),

    //js合并文件任务
    concat: {
      //文件头部输出信息
      options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>  author:tangzq*/\n'
      },
      dist: {
        src: 'src/js/*.js',
        dest: 'dist/js/app.js'
      }
    },

    //js压缩文件任务
    uglify: {
      //文件头部输出信息
      options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>  author:tangzq*/\n'
      },
      dist: {
        options: {report: "gzip"},
           src: 'dist/js/app.js',
           dest: 'dist/js/app.min.js'
      }
    },

    //压缩CSS文件
    cssmin:{
       build:{
         files:[{
            expand:true, //是否分开压缩
            //cwd:"css",
            src:['src/css/*.css','!src/css/*.min.css'], //压缩文件夹css下除以.min.css结尾之外的所有的css文件
            dest:'dist/',
            ext:'.min.css',
            //extDot:'last'
         }]
       }
    },
  });

  // 加载包含 "uglify","concat"的任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat', 'uglify','cssmin']);

};