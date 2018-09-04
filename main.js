var scriptArgs = document.getElementById('requireScript').getAttribute('data-moudle');
require(['./Config/require.config'],
    function(){
        require([scriptArgs]);
    });