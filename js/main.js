$(function() {

	$('.slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
	
		]
	  });

	 
	 $('.faq-item-title').on('click', function() {
		 $(this).parent().toggleClass('active');
	 });
})


$('.fancybox-media').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	helpers : {
		media : {}
	}
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("nav-sticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
