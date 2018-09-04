require([
        'Bootstrap',
        'Lodash.compat',
        'Jquery.event.move',
        'Jquery.event.swipe',
        'Respond',
        'Jquery.uniform',
        'Jquery-validate',
        'Nprogress',
        'Tn_code',
        '../../Lib/assets/js/login'
    ],
    function(){
        $(document).ready(function(){
            "use strict";
            Login.init();
            if($('.login-form').attr("data-check") == 1)
            {
                //需要验证码
                tncode.init();
            }
        });
    });