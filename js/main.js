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
		$('.pricing-comparison-wrapper').each(function() {
			var wrapper = $(this);
			var table = wrapper.find('.pricing-comparison-table');

			// Check if on mobile
			if ($(window).width() <= 767) {
				// Transform to mobile card layout
				transformToMobileCards(wrapper);
			} else if ($(window).width() <= 991) {
				// Tablet - horizontal scroll
				if (table[0] && table[0].scrollWidth > wrapper.width()) {
					wrapper.addClass('has-scroll');
				} else {
					wrapper.removeClass('has-scroll');
				}
			} else {
				// Desktop - check for horizontal scroll
				if (table[0] && table[0].scrollWidth > wrapper.width()) {
					wrapper.addClass('has-scroll');
				} else {
					wrapper.removeClass('has-scroll');
				}
			}
		});
	};

	// Detect scroll and hide scroll hint
	$('.pricing-comparison-wrapper').on('scroll', function() {
		var wrapper = $(this);
		if (wrapper.scrollLeft() > 10) {
			wrapper.addClass('scrolled');
		} else {
			wrapper.removeClass('scrolled');
		}
	});

	// Transform comparison table to mobile card layout
	function transformToMobileCards(wrapper) {
		// Only transform if not already done
		if (wrapper.hasClass('mobile-transformed')) {
			return;
		}

		var table = wrapper.find('.pricing-comparison-table');
		var headerRow = table.find('.header-row');
		var featureRows = table.find('.comparison-row:not(.header-row):not(.action-row)');
		var actionRow = table.find('.action-row');

		// Extract plan information
		var plans = [];
		headerRow.find('.plan-cell').each(function(index) {
			var planCell = $(this);
			var planHeader = planCell.find('.plan-header');
			var icon = planHeader.find('.icon').html();
			var title = planHeader.find('h4').text().trim();
			var price = planHeader.find('.price').html();

			plans.push({
				index: index,
				icon: icon,
				title: title,
				price: price,
				features: []
			});
		});

		// Extract features for each plan
		featureRows.each(function() {
			var row = $(this);
			var featureName = row.find('.feature-cell span').text().trim();

			row.find('.plan-cell').each(function(index) {
				var cell = $(this);
				var hasCheck = cell.find('.check-icon').length > 0;
				var hasTimes = cell.find('.times-icon').length > 0;
				var customText = cell.text().trim();

				if (plans[index]) {
					plans[index].features.push({
						name: featureName,
						hasCheck: hasCheck,
						hasTimes: hasTimes,
						customText: (!hasCheck && !hasTimes) ? customText : ''
					});
				}
			});
		});

		// Extract action buttons
		actionRow.find('.plan-cell').each(function(index) {
			if (plans[index]) {
				plans[index].button = $(this).html();
			}
		});

		// Extract min order text if exists
		var minOrderText = actionRow.find('.feature-cell .min-order').html();

		// Create mobile card layout
		var mobileContainer = $('<div class="pricing-mobile-container"></div>');

		// Add min order text if exists
		if (minOrderText) {
			mobileContainer.append('<div class="pricing-mobile-min-order">' + minOrderText + '</div>');
		}

		// Create cards for each plan
		plans.forEach(function(plan, index) {
			var featuredClass = index === 1 ? ' featured' : ''; // Middle plan is featured
			var card = $('<div class="pricing-mobile-card' + featuredClass + '"></div>');

			// Card header
			var cardHeader = $('<div class="pricing-mobile-card-header"></div>');
			cardHeader.append('<div class="pricing-mobile-card-icon">' + plan.icon + '</div>');
			cardHeader.append('<div class="pricing-mobile-card-title">' + plan.title + '</div>');
			cardHeader.append('<div class="pricing-mobile-card-price">' + plan.price + '</div>');
			card.append(cardHeader);

			// Card features
			var cardFeatures = $('<div class="pricing-mobile-card-features"></div>');
			plan.features.forEach(function(feature) {
				var featureHtml = '<div class="pricing-mobile-card-feature">';
				featureHtml += '<div class="pricing-mobile-card-feature-icon">';

				if (feature.hasCheck) {
					featureHtml += '<span class="check-icon"><i class="fa fa-check"></i></span>';
				} else if (feature.hasTimes) {
					featureHtml += '<span class="times-icon"><i class="fa fa-times"></i></span>';
				} else if (feature.customText) {
					featureHtml += '<span class="text-primary" style="font-weight: 600;">' + feature.customText + '</span>';
				}

				featureHtml += '</div>';
				featureHtml += '<div class="pricing-mobile-card-feature-text">' + feature.name + '</div>';
				featureHtml += '</div>';

				cardFeatures.append(featureHtml);
			});
			card.append(cardFeatures);

			// Card CTA
			if (plan.button) {
				var cardCta = $('<div class="pricing-mobile-card-cta"></div>');
				cardCta.append(plan.button);
				card.append(cardCta);
			}

			mobileContainer.append(card);
		});

		// Replace table content with mobile cards
		table.html('').append(mobileContainer);
		wrapper.addClass('mobile-transformed');
	}

	// Reset mobile transformation on resize to desktop
	$(window).on('resize', function() {
		if ($(window).width() > 767) {
			$('.pricing-comparison-wrapper').each(function() {
				if ($(this).hasClass('mobile-transformed')) {
					// Reload page to restore original layout
					// Or you could store original HTML and restore it
					location.reload();
				}
			});
		}
	});

	// Run on load and resize
	pricingTableScroll();
	$(window).on('resize', function() {
		pricingTableScroll();
	});


	// Add data-label to each plan cell for mobile context
	function addPlanLabelsToComparisonTable() {
	  var tables = document.querySelectorAll('.pricing-comparison-table');
	  tables.forEach(function(table) {
	    var headerRow = table.querySelector('.header-row');
	    if (!headerRow) return;
	    var planHeaders = headerRow.querySelectorAll('.plan-cell .plan-header h4');
	    var planNames = Array.from(planHeaders).map(function(h) { return h.textContent.trim(); });
	    var rows = table.querySelectorAll('.comparison-row:not(.header-row):not(.action-row)');
	    rows.forEach(function(row) {
	      var planCells = row.querySelectorAll('.plan-cell');
	      planCells.forEach(function(cell, idx) {
	        if (planNames[idx]) {
	          cell.setAttribute('data-label', planNames[idx]);
	        }
	      });
	    });
	  });
	}
	// Run on DOMContentLoaded and on window resize (in case of dynamic content)
	document.addEventListener('DOMContentLoaded', addPlanLabelsToComparisonTable);
	window.addEventListener('resize', addPlanLabelsToComparisonTable);


})(jQuery);

