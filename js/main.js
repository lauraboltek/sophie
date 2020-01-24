$(function() {
	//slider
	/*
	$('.slider').slick({
		 dots: false,
		 infinite: false,
		 speed: 300,
		 slidesToShow: 4,
		 slidesToScroll: 3,
		 responsive: [
		 {
			 breakpoint: 766,
			 settings: 'unslick'
		 }
		 ]
	 });
	 */

	 
	 $('.faq-item-title').on('click', function() {
		 $(this).parent().toggleClass('active');
	 });
})