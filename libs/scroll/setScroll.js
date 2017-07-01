$(window).on("load",function(){
 
 	

(function($){
	/* 	var imgHeader = document.getElementById('imgHeader');
		var footImg = document.getElementById('footImg');	 */ 
	 
		
		$("body").mCustomScrollbar({
			theme:"minimal-dark",
			mouseWheelPixels: 100,
			documentTouchScroll: true,
			scrollInertia:60,
			callbacks:{ 
				
				/* whileScrolling: function(){				 
					var overHeight = parseInt(this.mcs.content.css('height'));
					var topScroll = this.mcs.top*(-1);
					var imgHeight = 350;
						if(topScroll<400){
								imgHeader.style.top = ( topScroll ) + "px";	 
						}else if( (imgHeight+topScroll+window.innerHeight) >= overHeight ){
								var botTop = topScroll - (overHeight-window.innerHeight);							 
								footImg.style.top = botTop+"px"; 			
						}
				} */
			}
		});
		
		$('#contacts').click(function(){
			$("body").mCustomScrollbar("scrollTo",'bottom',{
				scrollInertia:1000
			});
		} )
		
		 

})(jQuery);
});

