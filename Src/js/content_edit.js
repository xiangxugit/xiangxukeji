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
        'Jquery.tagsinput',
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
            $("#info_template").val(info_template);
            $("#ispage").val(ispage);
            if(ispage==2)
            {
                $('#pagecount').show();
            }
            else
            {
                $('#pagecount').hide();
            }
        });
        $(function(){ $(window).scrollTop(0)});
    }
);