// Script for menu button
$('.burger-menu').on('click', function() {
	if ($(this).hasClass("burger-menu-clicked")) {
		$(this).removeClass("burger-menu-clicked");
		$(this).addClass("burger-menu-closing");
	} else {
		$(this).addClass("burger-menu-clicked");
		$(this).removeClass("burger-menu-closing");
	}
});
$('.navbar__icon').on('click', function(){
	$('.navbar__menu-responsive').toggleClass('active');
	$('.navbar__icon').toggleClass('active');
});

// Script for fixed navbar
$(window).on('scroll', function(){
	if($(this).scrollTop() > 0){
		$('.navbar').addClass('fixed');
	}
	else{$('.navbar').removeClass('fixed');}
});