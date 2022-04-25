

$(function(){
	
	var i = false;
		
	$('#open_menu').hide();
	
	$('#spicon').click(function(){

		if(i === false) {
			i = true;
			if($('#spicon').hasClass('m_active') === false) {
				$('body').css('overflow',"hidden");
				$('#spicon').addClass('m_active');
				$('#open_menu').fadeIn(100, 'linear',function(){
					$("#close").stop().animate({
						opacity:"1"
					},{
						duration: 100,
						easing: 'easeOutCubic',
						complete:function(){
							i = false;
						}
					});
				});
			}else {
				$('body').css('overflow',"visible");
				$('#spicon').removeClass('m_active');
				$('#open_menu').fadeOut(100, 'linear',function(){
					$("#close").stop().animate({
						opacity:"1"
					},{
						duration: 100,
						easing: 'easeOutCubic',
						complete:function(){
							i = false;
						}
					});

				});
			}
		}
	});
});
