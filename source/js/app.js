//EFEITO MUDANCA DO FIXED MENU AO ROLAR
$(document).scroll(function(){
    if($(this).scrollTop() > 100){
        $(".main__header").addClass("header-small");
    }else if($(this).scrollTop() < 100){
        $(".main__header").removeClass("header-small");
    }
})


$(function() {
	$('.main__nav ul li a').click(function(e) {
		e.preventDefault();
		var linkHref = $(this).attr("href"),
				linkId = $(linkHref);

		$('html, body').animate({scrollTop:linkId.position().top - 50}, 'slow');
	});
	$(window).scroll(function() {
		var scroll = $(window).scrollTop() + 50;
		var currentArea = $('section').filter(function() {
			return scroll <= $(this).offset().top + $(this).height();
		});
		$('nav a').removeClass('active');
		$('nav a[href=#' + currentArea.attr('id') +']').addClass('active');
	});
	$('.btn').click(function(e) {
		e.preventDefault();
		var linkHref = $(this).attr("href"),
				linkId = $(linkHref);

		$('html, body').animate({scrollTop:linkId.position().top - 20}, 'slow');
	});
});