var scriptArgs = document.getElementById('requireScript').getAttribute('data-moudle');
console.log("scriptArgs");
console.log("scriptArgs");

require(['./Config/require.config'],
    function(){
        require([scriptArgs]);
    });