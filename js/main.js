window.addEventListener("scroll", function() {
	if (window.scrollY > 30) {
		$('.fade-control').fadeOut();
	}
	else {
		$('.fade-control').fadeIn();
	}
},false;

$('img').each(function(_, img) {
    var $this = $(this);

    if( $this.height() / $this.width() < 1 ) {
        $this.css({
            height: '100%',
            maxWidth: 'none'
        });
    }
});

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});