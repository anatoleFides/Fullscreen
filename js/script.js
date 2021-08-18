$(document).ready(function(){
	var
		screen = 0,
		container = $('.wrapper__body'),
		pages = $('.fullscreen'),
		inscroll = false;
	$('.fullscreen:first-child').addClass('active');
	$('body').on('mousewheel',function(event){
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
		},800);
	});
});
// $(document).ready(function(){
// 	$('body').on('mousewheel',function(event){
// 		console.log(event.deltaY);
// 	});
// });
