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
			slidesToShow: 4,
			slidesToScroll: 4,
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
		},
		{
			breakpoint: 430,
			settings: "unslick"
		}
		]
	});


	//bubble
	const sections = document.querySelectorAll('section');
	const bubble = document.querySelector('bubble');
	const bcgcolor = ['#544a49'];

	const options = {
		threshold: 0.7
	};

	let observer = new IntersectionObserver(navCheck, options);

	function navCheck(entries){
		entries.forEach(entry => {
			const className = entry.target.className;
			const activeAnchor = document.querySelector(`[data-page=${className}]`);
			const bcgcolor = entry.target.getAttribute('data-index');
			const coords = activeAnchor.getBoundingClientRect();
			const directions = {
				height: coords.height,
				width: coords.width,
				top: coords.top,
				left: coords.left
			};
			if(entry.isIntersecting){
				bubble.style.setProperty('left', `&{directions.left}px`);
				bubble.style.setProperty('top', `&{directions.top}px`);
				bubble.style.setProperty('width', `&{directions.width}px`);
				bubble.style.setProperty('height', `&{directions.height}px`);
				bubble.style.background = bcgcolor[bcgcolor];
			}
		})
	}

	sections.forEach(section => {
		observer.observe(section);
	})


	//fancybox
	var body = $('body');
	 
	 $('.faq-item-title').on('click', function() {
		 $(this).parent().toggleClass('active');
	 });
	 $('.nav a').on('click', function() {
        body.removeClass('active-nav');
     });

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
	
	$('.btn-toggle-nav').on('click', function() {
		$('body').toggleClass('active-nav');
	});
	
	
	var scrollPosition = 0;
	$(window).on('scroll', function() {
		var currScrollPosition = $(this).scrollTop(),
			toTop = $('a.to-top'),
	
		scrollPosition = currScrollPosition;
	
		if(scrollPosition > 400) {
			toTop.addClass('active');
		} else {
			toTop.removeClass('active');
		}
	});	 
})



