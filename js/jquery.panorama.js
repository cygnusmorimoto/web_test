/* =========================================================
// jquery.panorama.js
// Author: OpenStudio (Arnault PACHOT)
// Mail: apachot@openstudio.fr
// Web: http://www.openstudio.fr
// Copyright (c) 2008 Arnault Pachot
// licence : GPL
========================================================= */

(function($) {
	$.fn.panorama = function(options) {
		this.each(function(){ 
			var settings = {
				viewport_width: 3000,
				speed: 60000,
				direction: 'left',
				control_display: 'auto',
				start_position: 0,
				auto_start: true,
				mode_360: true
			};
			if(options) $.extend(settings, options);
		
			var elemWidth = parseInt($(this).attr('width'));
			var elemHeight = parseInt($(this).attr('height'));
			var currentElement = this;
			var panoramaViewport, panoramaContainer;
			var bMouseMove = false;
			var mouseMoveStart = 0;
			var mouseMoveMarginStart = 0;

			$(this).attr('unselectable','on')
				.css('position', 'relative')
				.css('-moz-user-select','none')
				.css('-webkit-user-select','none')
				.css('margin', '0')
				.css('padding', '0')
				.css('border', 'none')
				.wrap("<div class='panorama-container'></div>");
			if (settings.mode_360) 
				$(this).clone().insertAfter(this);
			
			panoramaContainer = $(this).parent();
			panoramaContainer.css('height', elemHeight+'px').css('overflow', 'hidden').wrap("<div class='panorama-viewport'></div>").parent().css('width',settings.viewport_width+'px')
				.append("");
			
			panoramaViewport = panoramaContainer.parent();

			panoramaViewport.mousedown(function(e){
			      if (!bMouseMove) {
				bMouseMove = true;
				mouseMoveStart = e.clientX;
			      }
			      return false;
			}).mouseup(function(){
			      bMouseMove = false;
			      mouseMoveStart = 0;
			      return false;
			}).mousemove(function(e){
			      if (bMouseMove){
				  var delta = parseInt((mouseMoveStart - e.clientX)/30);
				  if ((delta>10) || (delta<10)) {
				      var newMarginLeft = parseInt(panoramaContainer.css('marginLeft')) + (delta);
				      if (settings.mode_360) {
					    if (newMarginLeft > 0) {newMarginLeft = -elemWidth;}
					    if (newMarginLeft < -elemWidth) {newMarginLeft = 0;}
				      } else {
					    if (newMarginLeft > 0) {newMarginLeft = 0;}
					    if (newMarginLeft < -elemWidth) {newMarginLeft = -elemWidth;}
				      }
				      panoramaContainer.css('marginLeft', newMarginLeft+'px');
				  }
				
			      }
			}).bind('contextmenu',function(){return false;});
			
			
			if (settings.control_display == 'yes') {
				panoramaViewport.find('.panorama-control').show();
			} else if (settings.control_display == 'auto') {
				panoramaViewport.bind('mouseover', function(){
					$(this).find('.panorama-control').show();
					return false;
				}).bind('mouseout', function(){
					$(this).find('.panorama-control').hide();
					return false;
				});
				
			}
		
			$(this).parent().css('margin-left', '-'+settings.start_position+'px');

			if (settings.auto_start) 
				panorama_animate(panoramaContainer, elemWidth, settings);
			
		});
		function panorama_animate(element, elemWidth, settings) {
			currentPosition = 0-parseInt($(element).css('margin-left'));
			
			if (settings.direction == 'right') {
				
				$(element).animate({marginLeft: 0}, ((settings.speed / elemWidth) * (currentPosition)) , 'linear', function (){ 
					if (settings.mode_360) {
						$(element).css('marginLeft', '-'+(parseInt(parseInt(elemWidth))+'px'));
						panorama_animate(element, elemWidth, settings);
					}
				});
			} else {
 				
				var rightlimit;
				if (settings.mode_360) 
					rightlimit = elemWidth;
				else
					rightlimit = elemWidth-settings.viewport_width;
					
				$(element).animate({marginLeft: -rightlimit}, ((settings.speed / rightlimit) * (rightlimit - currentPosition)), 'linear', function (){ 
					if (settings.mode_360) {
						$(element).css('margin-left', 0); 
						panorama_animate(element, elemWidth, settings);
					}
				});
			}

			
		}
		
	};

$(document).ready(function(){
	$("img.panorama").panorama();
});
})(jQuery);