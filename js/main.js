(function($) {

	"use strict";


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

  var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: false,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	// Before/After Carousel
	var beforeAfterCarousel = function() {
		$('.before-after-carousel').owlCarousel({
			center: false,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="fa fa-chevron-left">', '<span class="fa fa-chevron-right">'],
			dots: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	};
	beforeAfterCarousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// Stepper Animation on Scroll
	var stepperAnimation = function() {
		var stepperSection = $('.stepper-wrapper, .vertical-stepper');

		if (stepperSection.length > 0) {
			stepperSection.waypoint(function(direction) {
				if (direction === 'down' && !stepperSection.hasClass('animated')) {
					stepperSection.addClass('animated');

					// Animate horizontal stepper items
					$('.stepper-item').each(function(index) {
						var $this = $(this);
						setTimeout(function() {
							$this.addClass('fadeInUp ftco-animated');
						}, index * 200);
					});

					// Animate vertical stepper items
					$('.vertical-step').each(function(index) {
						var $this = $(this);
						setTimeout(function() {
							$this.addClass('fadeInLeft ftco-animated');
						}, index * 200);
					});
				}
			}, { offset: '80%' });
		}
	};
	stepperAnimation();

	// Update Get Started buttons to link to contact section
	$('a[data-translate="button.getstarted"]').attr('href', '#contact');

	// Optional: Auto-cycle through stepper states (demo purposes)
	// Uncomment to enable auto-cycling animation
	/*
	var stepperCycle = function() {
		if ($('.stepper-wrapper').length > 0) {
			var steps = $('.stepper-item, .vertical-step');
			var currentStep = 0;

			setInterval(function() {
				// Remove all states
				steps.removeClass('completed active');

				// Add completed state to previous steps
				for (var i = 0; i <= currentStep; i++) {
					steps.eq(i).addClass('completed');
				}

				// Set current step as active
				steps.eq(currentStep).removeClass('completed').addClass('active');

				// Move to next step
				currentStep = (currentStep + 1) % steps.length;
			}, 3000);
		}
	};
	stepperCycle();
	*/

	// Pricing table scroll indicator for mobile
	var pricingTableScroll = function() {
		if ($(window).width() <= 991) {
			$('.pricing-comparison-wrapper').each(function() {
				var wrapper = $(this);
				var table = wrapper.find('.pricing-comparison-table');

				// Check if table is wider than wrapper
				if (table[0] && table[0].scrollWidth > wrapper.width()) {
					wrapper.addClass('has-scroll');
				} else {
					wrapper.removeClass('has-scroll');
				}
			});
		}
	};

	// Run on load and resize
	pricingTableScroll();
	$(window).on('resize', function() {
		pricingTableScroll();
	});

})(jQuery);

