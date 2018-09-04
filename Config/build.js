({
    appDir : "../Src", //应用程序的顶级目录
    baseUrl: './js',//所有的模块都相对于这个路径存在,，baseUrl 的路径是相对与appDir
    mainConfigFile : "./require.config.js", //RequireJS的主配置文件
    dir: "../Build",
    optimize: 'uglify',//压缩所有js文件
    inlineText: true,//内联所有文本和依赖，避免多次异步请求这些依赖
    preserveLicenseComments: true,//把所有注释写在文件的顶部
    //wrapShim:true,//静止非模块包裹define函数
    //skipModuleInsertion:true,//打包后不用require加载
    //findNestedDependencies:true,//去除require/define依赖
    //optimizeCss: 'standard', //标准压缩css
    //fileExclusionRegExp: /^(r|build)\.js$/,
    //skipDirOptimize: true, // 跳过没有在modules里面声明且不用被生成的JS文件。
    //removeCombined: false,//true在输出目录将会删除掉已经合并了的文件

    //执行方法
    //cd Tools
    //node r.js -o ./Config/build.js
})