define('helper',['jquery'],function($){

    console.log("helper加载及执行");
	return {trim:function(str){
		return $.trim(str);
	}}
  });

