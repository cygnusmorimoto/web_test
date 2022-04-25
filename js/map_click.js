$(function(){
	$('.map_click iframe').css('pointer-events', 'none');

    $(".map_click").click(function(){
        $('.map_click iframe').css('pointer-events', 'auto');
    });
});
