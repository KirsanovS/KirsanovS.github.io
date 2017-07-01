$('html').append('<div id="preload"><br/><br/><img style="width:50%;" src="imgs/design/logo.svg" /><br/><img style="width:70%;" src="imgs/design/animation3.gif" /></div>');
 var preload = $('#preload') 
preload.css(
{'background':'rgb(236, 240, 241)', 
'overflow': 'hidden',
 'text-align': 'center', 'position': 'absolute',   
 'top': '0px',	'left': '0px',    'bottom': '0px',    'right': '0px',  
 'z-index': '10', })
 
 $(window).load(function(){
	 $("#preload").remove() 
	 console.log('load')
 })