/*main.js�о�������������require.config��require��*/

/*require���ã�����js�ļ�·��*/
require.config({
    baseUrl: 'js'

	/*paths����������ӳ��ģ�������requirejs2.0����ǿ�󣬿�������Ϊһ�����飬
	˳��ӳ�䡣��ǰ���·��û�гɹ�����ʱ�ɽ���ʹ�ú����·��������
	enforceDefine: true,
    paths: {
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',  (jquery·��һ)
            'lib/jquery'  (jquery����·��)
        ]
    }
	require.config()����һ�����ö���������������ǰ��˵����paths����֮�⣬
	����һ��shim���ԣ�ר���������ò����ݵ�ģ�飨�������������˵��ÿ��ģ��Ҫ����
	��1��exportsֵ������ı����������������ģ���ⲿ����ʱ�����ƣ�
	��2��deps���飬������ģ��������ԡ�
	shim: {
��������'jquery.scroll': {    (path�ж���ı���)
������������deps: ['jquery'],  �������������ļ���
������������exports: 'jQuery.fn.scroll'  �������ⲿ����ʱ�����ƣ�
��������}

����}*/
});

/*require ����js�ļ���ִ��*/
require(["jquery","jquery.alpha","jquery.beta"],function($){
	$(function(){
        alert($().jquery);
        $('#req-button-one').alpha().beta();

    });
});