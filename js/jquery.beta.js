/*���庯��define, ���������������������ַ�����
1.main.js-shim�����ã��첽���س�һ��ģ�飩��
2.define�м����������£�['jquery','jquery-dialog']��
<===============================>
�ú����û�����ģ�顣ÿ��ģ��ӵ��һ��Ψһ��ģ��ID��
��������RequireJS������ʱ������define������һ��ȫ�ֺ�����
����Ҫʹ��requirejs�����ռ�.
<===============================>*/
define(['jquery'],function(){

$.fn.beta = function() {    
    return this.append('<p>Beta is Go!</p>');
};

$(function(){
  $("input[type=button][name='yy']").bind("click", function(){ 
	$('#req-button-one').removeClass('yubi_gc');
     	sayHey();

		});
	})
}); 
 


 function sayHey(){
     alert("Hey-reuqireJs");
 }


