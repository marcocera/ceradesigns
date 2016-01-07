$('.photos a').fluidbox();

$('.photos').masonry({
	itemSelector: '.photos > div',
	columnWidth: function(containerWidth) {
		return containerWidth/3
	}
});


$(window).on('resize', function () {
	$(window).trigger('scroll');
})

$(window).on('scroll', function() {

	var px = $(this).scrollTop();
	console.log(px);

	var h = $(window).height();
	var percent = px / h;
	var op = 1 - percent;

	$('.logo')
		.css('top', -px + 'px')
		.css('opacity', op);

	if (px > h) {
		$('.bar').fadeIn();
	}
	else {
		$('.bar').fadeOut();
	}

});
