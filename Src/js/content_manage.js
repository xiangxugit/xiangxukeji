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
        'Plugins.form-components'
    ],
    function(){
        $(document).ready(function(){
            "use strict";
            App.init();
            Plugins.init();
            FormComponents.init();
            require([ '../../Lib/assets/js/custom']);
            $('#stype').val(stype);
            $('#movetocatid').val(movetocatid);
        });
        $(function(){ $(window).scrollTop(0)});
    }
);