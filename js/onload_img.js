

// 画像のプリロード
$(function(){
	$("a img").each(function(){
		if(String($(this).attr("src")).match(/_off\.(.*)$/)){
			var img = new Image();
			img.src = String($(this).attr("src")).replace(/_off\.(.*)$/,"_on.$1");
		}
	});
});

// 画像のロールオーバー
$(function(){
	$('a img').hover(function(){
		$(this).attr('src',$(this).attr('src').replace('_off','_on'));
	},function(){
		$(this).attr('src',$(this).attr('src').replace('_on','_off'));
	});
});