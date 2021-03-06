$(document).ready(function() {
	

	var $tm = TweenMax;
	var $tl = new TimelineMax();

	/*$('.jewelry_pic').elevateZoom({
		zoomType: "lens",
		lensShape: "round",
		responsive: true,
		borderSize: 1, 
		borderColor: "#1a0225"
	});*/

	$(".fullHeight").css("min-height", $(window).height() - 50);

	// Init Owl
	$(".owl-carousel").owlCarousel({
		autoPlay: true,
		singleItem:true,
	});

	var $homeTitle = $(".home_logo");
	$tl.to($homeTitle, 2, { scale: 0, opacity: 0, display: "none", delay: 1})
		.from($(".video_div"), 2, { scale: 0, opacity: 0})

	// Animations
	if ($(window).width() > 767) {
		var $nav = $(".nav_custom");
		var $social = $(".social_div");
		var $copy = $(".copy");
		// Nav Animations
		$nav.hover(function(){
			$tm.to($social, 1, {height: "30px", opacity: 1});
			$tm.to($copy, 1, {height: "15px", opacity:1});
		    }, function(){
		    $tm.to($social, 0.8, {height: "0px", opacity:0});
		    $tm.to($copy, 0.8, {height: "0px", opacity:0});
		});
	}
	// Logo Animations
	var $aboutLogo = $(".about_logo");
	$aboutLogo.hover(function() {
		$tm.to(this, 0.3, {scale: 1.2});
	}, function() {
		$tm.to(this, 0.3, {scale: 1});
	});
	
	


	// Auto-resize contact form
	var $formInput = $(".form_input");
	$formInput.autosizeInput();
	var $textInput = $("#text_input");
	autosize($textInput);
	
	
	
});

