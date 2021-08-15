$ document.ready(function(){
	var
		screen = 0,
		container = $('.wrapper'),
		pages = $('.fullscreen'),
		inscroll = false;
	$('.fullscreen:first-child').addClass('active');
	$('body').on('mousewhell'),function(event){
		var
			activePage = pages.filter('.active');
		if (!inscroll){
			inscroll = true;
			if(event.delayY>0){
				if(activePage.prev().length){
					screen--;
				}
			} else {
				if(activePage.next().length){
					screen++;
				}
			}
		}
		var
			position = (-screen*100) + '%';
		pages.eq(screen).addClass('active').siblings().removeClass('active');
		container.css('top',position);
		setTimeout(function(){
			inscroll = false;
		},1300);
	}
});