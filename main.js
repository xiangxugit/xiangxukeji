var scriptArgs = document.getElementById('requireScript').getAttribute('data-moudle');
alert("scriptArgs");
console.log("scriptArgs");


require(['./Config/require.config'],
    function(){
        require([scriptArgs]);
});