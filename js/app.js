/**
 * 此js用来加载模块
 * 映射不放到basurl下的模块名
 * 
 * paths  可以是数组，第一个是首选项，第二个是第一个加载失败后的备用路径
 */
requirejs.config({
    baseUrl:"js",
    urlArgs:'v='+(new Date()).getTime(),//清楚缓存
    paths:{
       'jquery':'lib/jquery',
       'api':'../app/api',
       'bootstrap':'lib/bootstrap',
       'bootstrapbundle':'lib/bootstrap.bundle.min',
       'css': 'lib/css.min',
    },
    // 所有的文件都会加载css.js文件
     map: {
        '*': {
          'css': 'lib/css.min'
        }
      },

    shim:{
        quick: {
            deps: [
                 'css!../css/quick'
            ]
        },
        bootstrap: {
            deps: ['jquery','bootstrapbundle'],
            exports:'bootstrap'
        },


    }

})

require(['helper'],function(helper){
    var str = helper.trim(' amd ');
    console.log(str);
})


require(['jquery','api'],function($,api){
    api.getUser().then(function(user){
        console.log(user);
    })
})


require([
    'css!../css/quick',
    'css!../css/bootstrap.min'
  ], function () {
    // alert('Styles have loaded');
  });

  require([
    'jquery',
    'bootstrap',
    'bootstrapbundle'
  ], function () {
    // alert('Styles have loaded');
  });
  
//实际逻辑