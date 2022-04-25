/**
 * tab navigation
 * 
 * @copyright   RaNa design associates, inc.
 * @author      keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link        http://kaelab.ranadesign.com/
 * @link        http://ranagram.com/
 * @version     1.0
 * @date        2012
 *
 */
(function($) {

	$(function() {

		var url = location.href;
		var param = url.split("#");
		var pos;

		if(param[1] === "" || param[1] === null || param[1] === undefined){
			pos = 1;
		}
		else{

			pos = param[1].substr(-1);
		}

		$('.tab > ul > li').removeClass('active');
		$('.tab > ul > li').eq(pos-1).addClass('active');

		var n = $(".page").length;

		for(var i = 0; i < n; i++){
			if(i == (pos-1)){
				$('.page').eq(i).show();
			}
			else{
				$('.page').eq(i).hide();
			}
		}
		

		$(".tab a").click(function(event) {

			$(".tab li").removeClass("active");

			$(this).parent().addClass("active");
			// ページ切替
			// position:absoluteで同じ場所に重ねてあるページを、fadeOut/fadeInメソッドで切り替える。
			// まずページをすべてフェードアウトさせる。
			$(".page").stop(true).fadeOut();
			// 次に表示させたいページをフェードインさせる。
			$(this.hash).stop(true).fadeIn();
			
			// a要素のデフォルト処理（リンク遷移）をキャンセルさせる。
			event.preventDefault();

			var n = $(".page").length;
			var index = $(".tab a").index(this);

			
			for(var i = 0; i < n; i++){
				if(i == index){
					$('.page').eq(i).show();
				}
				else{
					$('.page').eq(i).hide();
				}
			}

		});
		

		var obj;

		var fin = document.referrer.indexOf('index');

		if(fin != -1) {
			$(".tab a").eq(pos-1).trigger("click");
		}

	});


})(jQuery);