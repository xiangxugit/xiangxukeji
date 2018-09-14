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
       'text':'../node_modules/requirejs-text/text',
       'head':'../head',
       "footer":'../footer',
       "metinfo":'../index_files/metinfo',
       'vue':'../node_modules/vue/dist/vue',
       'resource':'../node_modules/vue/dist/vue-resource.min'
    },
    // 所有的文件都会加载css.js文件
    //  map: {
    //     '*': {
    //       'css': 'lib/css.min'
    //     }
    //   },

    shim:{
        quick: {
            deps: [
                 'css!../css/quick',
            ]
        },
        //此处是用来控制加载顺序的
        bootstrap: {
            deps: ['jquery','bootstrapbundle'],
            exports:'bootstrap'
        },

        head: {
            deps: ['jquery','bootstrapbundle'],
            exports:'bootstrap'
        },

        metinfo:{
            deps: ['head','footer'],
            exports:'head'
        },

        resource:{
            deps: ['vue'],
            exports:'resource'
        }

    }

    // config:{
    //     text:{
    //         //请求之前请求头的设置

    //         onXhr:function(xhr,url){
    //                 console.log("url"+url);
    //         },
    //         createXhr: function(){

    //         },
    //         //请求完毕
    //         onXhrComplete:function(){

    //         }

    //     }

    // }

})

// require(['helper'],function(helper){
//     var str = helper.trim(' amd ');
//     console.log(str);
// })


// require(['jquery','api'],function($,api){
//     api.getUser().then(function(user){
//         console.log(user);
//     })
// })


require([
    'css!../css/quick',
    'css!../css/bootstrap.min',
    'css!../index_files/metinfo'
  ], function () {
  });

  require([
    'jquery',
    'bootstrap',
    'bootstrapbundle',
    'text',
    'text!../head.html!strip',
    'text!../footer.html!strip',
    'vue',
    'resource'
  ], function (jquery,bootstrap,bootstrapbundle,text,head,footer,vue) {
    // alert('Styles have loaded');
    console.log("text");
    console.log(text);
    console.log("head");
    console.log(head);
    $("#headtop").html(head);
    $("#footerbootom").html(footer);
    console.log("vue"+vue);
    //把head和footer

    //vue网络请求

    var url = 'https:www.baidu.com';
    // this.$http.get(url, params).then((res) => {
    //     console.log(res);
    // },(err) => {
    //     console.log(err);
    // })


    // jquery.ajax({
    //     type: 'GET',
    //     url: url,
    //     success:function(data) {
    //         console.log("data"+data);
    //     }
    // });



  });
  
//实际逻辑