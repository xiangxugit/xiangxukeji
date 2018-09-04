require.config({
    baseUrl: "Public/Src/js",//依赖根目录
    // 第三方脚本模块的别名
    paths: {

        "Jquery":"../../Lib/jquery/jquery-1.10.2.min",
        "jquery":"../../Lib/jquery/jquery-1.10.2.min",

        //jquery-ui自定义包
        "Jquery-ui.custom": "../../Lib/plugins/jquery-ui/jquery-ui-1.10.2.custom.min",

        //bootstrap
        "Bootstrap": "../../Lib/bootstrap/js/bootstrap.min",

        //JavaScript 实用工具库
        "Lodash.compat": "../../Lib/assets/js/libs/lodash.compat.min",

        //移动端触摸
        "Jquery.event.move": "../../Lib/plugins/event.swipe/jquery.event.move",

        //移动端轮播
        "Jquery.event.swipe": "../../Lib/plugins/event.swipe/jquery.event.swipe",

        //响应式断点
        "Breakpoints": "../../Lib/assets/js/libs/breakpoints",

        //cookie 插件,可以读取、写入、删除 cookie
        "Jquery.cookie": "../../Lib/plugins/cookie/jquery.cookie.min",

        //移动端拖拽
        "Jquery.ui.touch-punch": "../../Lib/plugins/touchpunch/jquery.ui.touch-punch.min",

        //将任何div转换成一个带有好看的滚动条的可滚动区域
        "Jquery.slimscroll": "../../Lib/plugins/slimscroll/jquery.slimscroll.min",
        "Jquery.slimscroll.horizontal": "../../Lib/plugins/slimscroll/jquery.slimscroll.horizontal.min",

        //线状图插件
        "Jquery.sparkline": "../../Lib/plugins/sparkline/jquery.sparkline.min",

        //图表插件
        "Jquery.flot": "../../Lib/plugins/flot/jquery.flot.min",
        "Jquery.flot.tooltip": "../../Lib/plugins/flot/jquery.flot.tooltip.min",
        "Jquery.flot.resize": "../../Lib/plugins/flot/jquery.flot.resize.min",
        "Jquery.flot.time": "../../Lib/plugins/flot/jquery.flot.time.min",
        "Jquery.flot.growraf": "../../Lib/plugins/flot/jquery.flot.growraf.min",

        //渲染和制作漂亮的饼图及动画效果
        "Jquery.easy-pie-chart":"../../Lib/plugins/easy-pie-chart/jquery.easy-pie-chart.min",

        // JavaScript 日期处理类库,用于解析、检验、操作、以及显示日期
        "Moment":"../../Lib/plugins/daterangepicker/moment.min",
        "Fullcalendar":"../../Lib/plugins/fullcalendar/fullcalendar.min",
        "Daterangepicker":"../../Lib/plugins/daterangepicker/daterangepicker",

        //模拟同步模式下发起Ajax请求的行为。该插件激活时,会组织用户在页面进行的操作,直到插件被关闭
        "Jquery.blockUI":"../../Lib/plugins/blockui/jquery.blockUI.min",

        //jQuery的通知(信息提示)插件
        "Jquery.noty":"../../Lib/plugins/noty/jquery.noty",
        "Top":"../../Lib/plugins/noty/layouts/top",
        "Default":"../../Lib/plugins/noty/themes/default",

        //表单美化插件
        "Jquery.uniform": "../../Lib/plugins/uniform/jquery.uniform.min",

        //页面tag标签生成
        "Jquery.tagsinput": "../../Lib/plugins/tagsinput/jquery.tagsinput.min",

        //下拉框插件
        "Select2": "../../Lib/plugins/select2/select2.min",
        "Select2_locale_zh-CN": "../../Lib/plugins/select2/select2_locale_zh-CN",
        "Fileinput": "../../Lib/plugins/fileinput/fileinput",
        "App": "../../Lib/assets/js/app",
        "Plugins": "../../Lib/assets/js/plugins",
        "Plugins.form-components": "../../Lib/assets/js/plugins.form-components",

        //验证插件
        "Check.func": "../../Lib/assets/js/check.func",
        "Jquery-validate": "../../Lib/plugins/validation/jquery.validate.min",

        //轻量级的进度条组件,
        "Nprogress": "../../Lib/plugins/nprogress/nprogress",

        //弹窗组件
        "Bootbox":"../../Lib/plugins/bootbox/bootbox.min",

        //系统初始化自定义线状图
        "Custom": "../../Lib/assets/js/custom",

        //HTML5支持
        //用于为不支持 CSS3 Media Queries 的浏览器提供媒体查询的 min-width 和 max-width 特性
        "Respond": "../../Lib/plugins/respond/respond.min",

        //代码编辑器
        "Codemirror":"../../Lib/plugins/codemirror/lib/codemirror",
        "Javascript":"../../Lib/plugins/codemirror/mode/javascript/javascript",
        "Htmlmixed":"../../Lib/plugins/codemirror/mode/htmlmixed/htmlmixed",
        "Cssjs":"../../Lib/plugins/codemirror/mode/css/css",
        "Xml":"../../Lib/plugins/codemirror/mode/xml/xml",
        "Active-line":"../../Lib/plugins/codemirror/addon/selection/active-line",
        "Matchbrackets":"../../Lib/plugins/codemirror/addon/edit/matchbrackets",

        //登录
        "Login":"../../Lib/assets/js/login",

        //滑动验证码
        "Tn_code":"../../Lib/plugins/tncode/tn_code"
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
        },
        {
            name: "admin_tables",
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
                'Plugins.form-components'
            ]
        },
        {
            name: "category_add",
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
            name: "content_add",
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
                'Jquery.tagsinput',
                'Select2',
                'Select2_locale_zh-CN',
                'App',
                'Plugins',
                'Plugins.form-components',
                'Check.func'
            ]
        },
        {
            name: "content_edit",
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
                'Jquery.tagsinput',
                'Select2',
                'Select2_locale_zh-CN',
                'App',
                'Plugins',
                'Plugins.form-components',
                'Check.func'
            ]
        },
        {
            name: "content_manage",
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
                'Plugins.form-components'
            ]
        },
        {
            name: "form_validation",
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
            name: "index",
            include:[
                'Jquery-ui.custom',
                'Bootstrap',
                'Lodash.compat',
                'Jquery.ui.touch-punch',
                'Jquery.event.move',
                'Jquery.event.swipe',
                'Respond',
                'Breakpoints',
                'Jquery.cookie',
                'Jquery.slimscroll',
                'Jquery.slimscroll.horizontal',
                'Jquery.sparkline',
                'Jquery.flot',
                'Jquery.flot.tooltip',
                'Jquery.flot.resize',
                'Jquery.flot.time',
                'Jquery.flot.growraf',
                'Jquery.easy-pie-chart',
                'Moment',
                'Daterangepicker',
                'Jquery.blockUI',
                'Fullcalendar',
                'Jquery.uniform',
                'Select2',
                'Select2_locale_zh-CN',
                'App',
                'Plugins',
                'Plugins.form-components'
            ]
        },
        {
            name: "model_fields_edit",
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
                'Jquery.tagsinput',
                'Select2',
                'Select2_locale_zh-CN',
                'App',
                'Plugins',
                'Plugins.form-components',
                'Check.func'
            ]
        },
        {
            name: "module_import",
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
                'Jquery.tagsinput',
                'Select2',
                'Fileinput',
                'Select2_locale_zh-CN',
                'App',
                'Plugins',
                'Plugins.form-components',
                'Check.func'
            ]
        },
        {
            name: "themes_code",
            include:[
                'Codemirror',
                'Javascript',
                'Htmlmixed',
                'Cssjs',
                'Xml',
                'Active-line',
                'Matchbrackets',
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
        }
    ]
});