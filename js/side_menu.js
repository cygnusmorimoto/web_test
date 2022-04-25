

$(function() {
	//$('.accordion_left').css('display', 'none');


	function accordion() {
		var ret = -1;		//eachのindex格納用

		$("div.accordion_right > ul > li > a").each(function(i, elem){
			if(!$(elem).hasClass("toggle")){
				return false;
			}
			//toggleの次のul取得
			var obj = $(elem).next();
			if(obj[0].style.display == "block"){
				//表示されていれば非表示に
				$(elem).toggleClass("active").next().slideToggle(300);
				//indexを保存
				ret = i;
				//eachを抜ける
				return false;
			}
		});
		//eachのindexとclickのindexが同じなら同じ場所clickなので何もしない
		if(ret != $(".accordion_right .toggle1").index(this)){
			//違う場所clickなので表示
			$(this).toggleClass("active").next().slideToggle(300);
		}
	}
	$(".accordion_right .toggle1").click(accordion);

	function accordion_left() {
		var ret = -1;		//eachのindex格納用

		$("div.accordion_left > ul > li > a").each(function(i, elem){
			if(!$(elem).hasClass("toggle2")){
				return false;
			}
			//toggleの次のul取得
			var obj = $(elem).next();
			if(obj[0].style.display == "block"){
				//表示されていれば非表示に
				$(elem).toggleClass("active").next().slideToggle(300);
				//indexを保存
				ret = i;
				//eachを抜ける
				return false;
			}
		});
		//eachのindexとclickのindexが同じなら同じ場所clickなので何もしない
		if(ret != $(".accordion_left .toggle2").index(this)){
			//違う場所clickなので表示
			$(this).toggleClass("active").next().slideToggle(300);
		}
	}
	$(".accordion_left .toggle2").click(accordion_left);

	//bodyのメニューボタンクリック
	$('#spmenu').click(function() {
		//toggleClassで判別用クラスを未定義なら定義に、定義なら未定義に
		$("#spmenu").toggleClass("open");
		if($("#spmenu").hasClass("open")){
			//$(".hogehoge").show();
			//クラスが定義されていたら、メニュー表示
			$('.accordion_right').animate({width: 'toggle'}, 'normal');
			if($("#menu2").hasClass("open")){
				//反対側のメニューが表示されていたら、非表示に
				$("#menu2").toggleClass("open");
				$('.accordion_left').animate({width: 'toggle'}, 'normal');
				//bodyのメニュー表示
				$("#menu2").fadeIn(500);
			}
		}
		else{
			//$(".hogehoge").hide();
			//クラス未定義なので、非表示に
			$('.accordion_right').animate({width: 'toggle'}, 'normal');
		}
	});



	//bodyのメニューボタンクリック
	$('#menu2').click(function() {
		//toggleClassで判別用クラスを未定義なら定義に、定義なら未定義に
		$("#menu2").toggleClass("open");
		if($("#menu2").hasClass("open")){
			//$(".hogehoge").show();
			//クラスが定義されていたら、メニュー表示
			$('.accordion_left').animate({width: 'toggle'}, 'normal');
			//bodyのメニュー非表示
			$("#menu2").fadeOut(5);
			if($("#menu").hasClass("open")){
				//反対側のメニューが表示されていたら、非表示に
				$("#menu").toggleClass("open");
				$('.accordion_right').animate({width: 'toggle'}, 'normal');
			}
		}
		else{
			//$(".hogehoge").hide();
			//クラス未定義なので、非表示に
			$('.accordion_left').animate({width: 'toggle'}, 'normal');
			//bodyのメニュー表示
			$("#menu2").fadeIn(500);
		}

	});

	//メニュー内のボタンクリック
	$('#menu3').click(function() {
		//$(".hogehoge").hide();
		//メニュー内のボタンなので、表示されているのでクラスを未定義に
		$("#menu").toggleClass("open");
		//メニュー非表示
		$('.accordion_right').animate({width: 'toggle'}, 'normal');

	});


	//メニュー内のボタンクリック
	$('#menu4').click(function() {
		//$(".hogehoge").hide();
		//メニュー内のボタンなので、表示されているのでクラスを未定義に
		$("#menu2").toggleClass("open");
		//メニュー非表示
		$('.accordion_left').animate({width: 'toggle'}, 'normal');
		//bodyのメニュー表示
		$("#menu2").fadeIn(500);

	});

	//ボタン以外のクリックでメニュー非表示
//	$(".hogehoge").on("click", function(){
	$(".hoge").on("click", function(){
		if($("#menu").hasClass("open")){
			//表示されていたらクラスを未定義に
			$("#menu").toggleClass("open");
			//メニュー非表示
			$('.accordion_right').animate({width: 'toggle'}, 'normal');
		}
		if($("#menu2").hasClass("open")){
			//表示されていたらクラスを未定義に
			$("#menu2").toggleClass("open");
			//メニュー非表示
			$('.accordion_left').animate({width: 'toggle'}, 'normal');
			//bodyのメニュー表示
			$("#menu2").fadeIn(500);
		}
		//$(".hogehoge").hide();
	});

	//$("#menu").addClass('open');

});



