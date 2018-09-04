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
        "Lodash.compat": {
            deps: ['Jquery'],
            exports: 'lodash_compat'
        },
        "Jquery.event.move": {
            deps: ['Jquery'],
            exports: 'Jquery_event_move'
        },
        "Jquery.event.swipe": {
            deps: ['Jquery'],
            exports: 'Jquery_event_swipe'
        },
        "Breakpoints": {
            deps: ['Jquery'],
            exports: 'Breakpoints'
        },
        "Jquery.cookie":{
            deps: ['Jquery'],
            exports: 'Jquery_cookie'
        },
        "Jquery.ui.touch-punch": {
            deps: ['Jquery','Jquery-ui.custom'],
            exports: 'Jquery_ui_touch_punch'
        },
        "Jquery.slimscroll":{
            deps: ['Jquery'],
            exports: 'Jquery_slimscroll'
        },
        "Jquery.slimscroll.horizontal":{
            deps: ['Jquery'],
            exports: 'Jquery_slimscroll_horizontal'
        },
        "Jquery.sparkline":{
            deps: ['Jquery'],
            exports: 'Jquery_sparkline'
        },
        "Jquery.flot":{
            deps: ['Jquery'],
            exports: 'Jquery_flot'
        },
        "Jquery.flot.tooltip":{
            deps: ['Jquery','Jquery.flot'],
            exports: 'Jquery_flot_tooltip'
        },
        "Jquery.flot.resize":{
            deps: ['Jquery','Jquery.flot'],
            exports: 'Jquery_flot_resize'
        },
        "Jquery.flot.time":{
            deps: ['Jquery','Jquery.flot'],
            exports: 'Jquery_flot_time'
        },
        "Jquery.flot.growraf":{
            deps: ['Jquery','Jquery.flot'],
            exports: 'Jquery_flot_growraf'
        },
        "Jquery.easy-pie-chart":{
            deps: ['Jquery'],
            exports: 'Jquery_easy_pie_chart'
        },
        "Moment":{
            deps: ['Jquery'],
            exports: 'Moment'
        },
        "Fullcalendar":{
            deps: ['Jquery'],
            exports: 'Fullcalendar'
        },
        "Daterangepicker":{
            deps: ['Jquery'],
            exports: 'Daterangepicker'
        },
        "Jquery.blockUI":{
            deps: ['Jquery'],
            exports: 'Jquery_blockUI'
        },
        "Jquery.noty":{
            deps: ['Jquery'],
            exports: 'Jquery_noty'
        },
        "Top": {
            deps: ['Jquery','Jquery.noty'],
            exports: 'Top'
        },
        "Default":{
            deps: ['Jquery','Jquery.noty'],
            exports: 'Default'
        },
        "Jquery.uniform":{
            deps: ['Jquery'],
            exports: 'Jquery_uniform'
        },
        "Jquery.tagsinput":{
            deps: ['jquery'],
            exports: 'jquery_tagsinput'
        },
        "Select2":{
            deps: ['Jquery'],
            exports: 'Select2'
        },
        "Select2_locale_zh-CN":{
            deps: ['Jquery','Select2'],
            exports: 'Select2_locale_zh_CN'
        },
        "Fileinput":{
            deps: ['Jquery'],
            exports: 'Fileinput'
        },
        "App":{
            deps: ['Jquery'],
            exports: 'App'
        },
        "Plugins": {
            deps: ['Jquery'],
            exports: 'Plugins'
        },
        "Plugins.form-components":{
            deps: ['Jquery','Jquery.tagsinput'],
            exports: 'Plugins_form_components'
        },
        "Check.func":{
            deps: ['Jquery'],
            exports: 'Check_func'
        },
        "Jquery-validate":{
            deps: ['Jquery'],
            exports: 'Jquery_validate'
        },
        "Nprogress":{
            deps: ['Jquery'],
            exports: 'Nprogress'
        },
        "Bootbox":{
            deps: ['Jquery'],
            exports: 'Bootbox'
        },
        "Custom":{
            deps: ['Jquery'],
            exports: 'Custom'
        },
        "Respond": {
            deps: ['Jquery','Bootstrap'],
            exports: 'Respond'
        },
        "Codemirror":{
            deps: ['Jquery'],
            exports: 'Codemirror'
        },
        "Javascript":{
            deps: ['Jquery','Codemirror'],
            exports: 'Javascript'
        },
        "Htmlmixed":{
            deps: ['Jquery','Codemirror'],
            exports: 'Htmlmixed'
        },
        "Cssjs":{
            deps: ['Jquery','Codemirror'],
            exports: 'Cssjs'
        },
        "Xml":{
            deps: ['Jquery','Codemirror'],
            exports: 'Xml'
        },
        "Active-line":{
            deps: ['Jquery','Codemirror'],
            exports: 'Active_line'
        },
        "Matchbrackets":{
            deps: ['Jquery','Active-line','Xml','Cssjs','Htmlmixed','Javascript'],
            exports: 'Matchbrackets'
        },
        "Login": {
            deps: ['Jquery'],
            exports: 'Login'
        }
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