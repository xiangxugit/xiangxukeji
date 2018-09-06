define(['jquery'],function($){
    return{
        getUser:function(){
            var def = $.Deferred();
            require(['api'],function(user){
                def.resolve(user);
            });

            return def;
        }
    }
});