require.config({
    baseUrl: "Public/Src/js",//依赖根目录
    // 第三方脚本模块的别名
    paths: {

        "Jquery":"../Lib/jquery/jquery-1.10.2.min",
        "jquery":"../Lib/jquery/jquery-1.10.2.min",
        //bootstrap
        "Bootstrap": "../Lib/bootstrap/js/bootstrap.min",
    },
    map: {
        '*': {
            //'Css': '../../Tools/css.min',
            //'Text': '../../Tools/text.min',
            //'Css-builder': '../../Tools/css-builder',
            //'Normalize': '../../Tools/normalize'
        }
    },
    shim: {
        "Jquery-ui.custom":{
            deps: ['Jquery','Jquery.sparkline'],
            exports: 'Jquery_ui'
        },
        "Bootstrap": {
            deps: ['Jquery'],
            exports: 'Bootstrap'
        },
    },
    modules: [
        {
            name: "admin_add",
            include:[
                'Jquery-ui.custom',
                'Bootstrap',
                'Lodash.compat',
                'Jquery.event.move',
                'Respond',
                'Breakpoints',
                'Jquery.cookie',
                'Jquery.slimscroll',
                'Jquery.slimscroll.horizontal',
                'Jquery.uniform',
                'Select2',
                'Select2_locale_zh-CN',
                'App',
                'Plugins',
                'Plugins.form-components',
                'Check.func'
            ]
        },
        {
            name: "admin_login",
            include:[
                'Bootstrap',
                'Lodash.compat',
                'Jquery.event.move',
                'Jquery.event.swipe',
                'Respond',
                'Jquery.uniform',
                'Jquery-validate',
                'Nprogress',
                'Login'
            ]
        }
        
    ]
});