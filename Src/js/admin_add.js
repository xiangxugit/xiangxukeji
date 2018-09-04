require([
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
    ],
    function(){
        $(document).ready(function(){
            checkForm(0);
            "use strict";
            App.init();
            Plugins.init();
            FormComponents.init();
            require([ '../../Lib/assets/js/custom']);
            $("#username").blur(function(){
                $.post(
                    '?file=admin&action=checkusername',
                    {data:this.value},
                    function(data){
                        var data = $.parseJSON(data);
                        if(data.code==1){
                            popup('管理员账号错误','该管理账户已存在或者不可用, 请更换!');
                            $('#username').focus();
                        }
                    });
            });
        });
        $(function(){ $(window).scrollTop(0)});
    }
);