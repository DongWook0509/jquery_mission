$(function () {
	var tabAnchor = $('.tabs-nav li'),
		tabPanel = $('.tabs-panel');
		
	tabAnchor.on('click',function(e){
		e.preventDefault();
		//tabAnchor.removeClass('active');
		//$(this).addClass('active');
		//var NewLink = $(this).attr('href');
		
		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active');

		tabPanel.hide();
		//$($(this).attr('href')).show();
		var $targetIdx = $(this).index();
		tabPanel.eq($targetIdx).show();
	});
	
	tabAnchor.eq(0).trigger('click');		

});

