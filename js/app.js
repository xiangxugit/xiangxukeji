/**
 * 此js用来加载模块
 * 映射不放到basurl下的模块名
 * 
 * paths  可以是数组，第一个是首选项，第二个是第一个加载失败后的备用路径
 */
requirejs.config({
    baseUrl:"js",
    paths:{
       'jquery':'lib/jquery',
       'api':'../app.api'
    }
})

require(['helper'],function(helper){
    var str = helper.trim(' amd ');
    console.log(str);
})


require(['jquery','/app.api'],function($,api){
    api.getUser().then(function(user){
        console.log(user);
    })
})

