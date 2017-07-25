(function($) {
    // 読み込んだら開始
    $(function() {
    
        // アコーディオン
        var accordion = $(".accordion_right");
		//初期表示で開くためクラス追加
        accordion.each(function () {
            var noTargetAccordion = $(this).siblings(accordion);
            $(this).find(".cy").click(function() {
				//クリック時「open」クラスの有無でボタンテキスト切り替え
				if($(this).hasClass("open")){
					//「open」クラス有り
					$(this).children(".mf-right").text("＋");
				}
				else{
					//「open」クラス無し
					$(this).children(".mf-right").text("－");
				}


                $(this).next(".contentWrap").slideToggle();
                $(this).toggleClass("open");
                noTargetAccordion.find(".contentWrap").slideUp();
                noTargetAccordion.find(".cy").removeClass("open");
                noTargetAccordion.find(".cy").children(".mf-right").text("＋");
            });
            $(this).find(".close2").click(function() {
                var targetContentWrap = $(this).parent(".contentWrap");
				//クリック時「open」クラスの有無でボタンテキスト切り替え
				if($(targetContentWrap).prev(".cy").hasClass("open")){
					//「open」クラス有り
					$(targetContentWrap).prev(".cy").children(".mf-right").text("－");
				}
				else{
					//「open」クラス無し
					$(targetContentWrap).prev(".cy").children(".mf-right").text("－");
				}
                $(targetContentWrap).slideToggle();
                $(targetContentWrap).prev(".cy").toggleClass("open");
            });
        });
    
    });
})(jQuery);