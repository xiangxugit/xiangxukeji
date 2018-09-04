require([
        'Codemirror',
        'Active-line',
        'Xml',
        'Cssjs',
        'Htmlmixed',
        'Javascript',
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
    ],
    function(CodeMirror){
        $(document).ready(function(){
            checkForm(0);
            "use strict";
            App.init();
            Plugins.init();
            FormComponents.init();
            require([ '../../Lib/assets/js/custom']);
            var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                indentUnit : 4,  // 缩进单位，默认2
                smartIndent : true,  // 是否智能缩进
                tabSize : 4,  // Tab缩进，默认4
                indentWithTabs: true, //在缩进时，是否需要把 n*tab宽度个空格替换成n个tab字符，默认为false
                showCursorWhenSelecting : true,
                lineNumbers: true,
                styleActiveLine: true,
                matchBrackets: true
            });
            var input = document.getElementById("select");
            var choice = (location.hash && location.hash.slice(1)) ||
                (document.location.search &&
                decodeURIComponent(document.location.search.slice(1)));
            var reg=choice.indexOf("#");
            if (choice && reg >= 0) {
                input.value = choice;
                editor.setOption("theme", choice);
            }
            CodeMirror.on(window, "hashchange", function() {
                var theme = location.hash.slice(1);
                if (theme) { input.value = theme; selectTheme(); }
            });
            $("#tlp_loop").click(function(){
                editor.replaceSelection('\n{loop $data $key $val}\n{$key}:{$val}\n{/loop}');
            });
            $("#tlp_if").click(function(){
                editor.replaceSelection('\n{if $var1 == $var2}\n\n{/if}');
            });
            $("#tlp_elseif").click(function(){
                editor.replaceSelection('\n{elseif $a == $b}\n');
            });
            $("#tlp_else").click(function(){
                editor.replaceSelection('\n{else}\n');
            });
            $("#tlp_tlp").click(function(){
                editor.replaceSelection('\n{tlp \'模板文件名\'}\n');
            });
            $("#tlp_include").click(function(){
                editor.replaceSelection('\n{include WANHUI_ROOT.\'php文件名\'}\n');
            });
            $('#select').change(function(){
                var theme = input.options[input.selectedIndex].value;
                editor.setOption("theme", theme);
                location.hash = "#" + theme;
            });
            function selectTheme() {
                var theme = input.options[input.selectedIndex].value;
                editor.setOption("theme", theme);
                location.hash = "#" + theme;
            }
        });
        $(function(){ $(window).scrollTop(0)});
    }
);