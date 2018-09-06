({
    appDir : "../Src", //应用程序的顶级目录
    baseUrl: './js',//所有的模块都相对于这个路径存在,，baseUrl 的路径是相对与appDir
    mainConfigFile : "./require.config.js", //RequireJS的主配置文件
    dir: "../Build",
    optimize: 'uglify',//压缩所有js文件
    inlineText: true,//内联所有文本和依赖，避免多次异步请求这些依赖
    preserveLicenseComments: true,//把所有注释写在文件的顶部

})