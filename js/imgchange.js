// JavaScript Document


$(function() {
    var windowWidth = $(window).width();
    var w_width = 740;
	if (windowWidth <= w_width) {
        //.spchangeを指定すれば【'images/sp/'】から呼び出される（background以外）あまり使わない
        //例　<img src="images/gazou.png" clas="spchange">
		$('.spchange').each(function(){
			$(this).attr('src',$(this).attr('src').replace('images/' , 'images/sp/'));
		});
        //.spchangebgを指定すれば【'images/sp/'】から呼び出される（backgroundのみ）メイン画像で良く使う
        //例　<div class="main-image spchangebg"></div>
		$('.spchangebg').each(function(){
			$(this).css({
				backgroundImage: $(this).css('background-image').replace('images/', 'images/sp/')
			});
		});
	}
});
	