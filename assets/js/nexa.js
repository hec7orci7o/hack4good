(function($) {
	'use strict';

	//============================== PRELOADER =========================
	$(window).on('load', function () {
		$('#preloader').fadeOut(500);
	});

	//============================== NAVBAR =========================
		jQuery(document).ready(function(a) {
        var b = 280;
        if (a(window).width() > b) {
            var c = a('.navbar-scrollUp').height();
            a(window).scroll({
                previousTop: 0
            }, function() {
                var b = a(window).scrollTop();
                b < this.previousTop ? b > 0 && a('.navbar-scrollUp').hasClass('is-fixed') ? a('.navbar-scrollUp').addClass('is-visible') : a('.navbar-scrollUp').removeClass('is-visible is-fixed') : (a('.navbar-scrollUp').removeClass('is-visible'), b > c && !a('.navbar-scrollUp').hasClass('is-fixed') && a('.navbar-scrollUp').addClass('is-fixed')), this.previousTop = b;
            });
        }
    });

	/*Navbar Scrollup*/
	$(window).on('load', function(){
		$('#body').each(function(){
			var header_area = $('.header');
			var main_area = header_area.find('.navbar');

			$(window).scroll(function(){
				if( main_area.hasClass('navbar-sticky') && ($(this).scrollTop() <= 100 || $(this).width() <= 750)){
					main_area.removeClass('navbar-sticky').appendTo(header_area);
					header_area.css('height', 'auto');
				}else if( !main_area.hasClass('navbar-sticky') && $(this).width() > 750 && $(this).scrollTop() > 400 ){
					header_area.css('height', header_area.height());
					main_area.css({'opacity': '0'}).addClass('navbar-sticky');
					main_area.appendTo($('body')).animate({'opacity': 1});
				}
			});

		});

		$(window).trigger('resize');
		$(window).trigger('scroll');
	});

	//============================== ICON TOGGLER ANIMATION =========================
	$('.btn-cart').on('click', function(e){
		e.preventDefault();
		$('.cart_item-box').toggleClass('visible');
	});

	var toolbarToggle = $('.icon-toggle');

	function closeToolBox() {
		toolbarToggle.removeClass('active');
	}

	function toggleMenu() {
		$('.navbar-toggler').toggleClass('clicked');
	}


	$('.navbar-toggler.animated').on('click', function(e) {
		$(this).toggleClass('clicked');
		if($('.icon-toggle').is('.active')) {
			closeToolBox();
		} else {
			closeToolBox();
			$('.icon-toggle').addClass('active');
		}
		e.preventDefault();
	});

	$('.navbar a.dropdown-toggle').on('click', function(e) {
		var elmnt = $(this).parent().parent();
		if (!elmnt.hasClass('navbar-nav')) {
			var li = $(this).parent();
			var heightParent = parseInt(elmnt.css('height').replace('px', ''),10) / 2;
			var widthParent = parseInt(elmnt.css('width').replace('px', ''),10) - 10;

			if(!li.hasClass('show')){li.addClass('show');}
			else{ li.removeClass('show');}
			$(this).next().css('top', heightParent + 'px');
			$(this).next().css('left', widthParent + 'px');

			return false;
		}
	});

	//============================== ALL DROPDOWN ON HOVER =========================
	if($('.navbar').width() > 750){
		$('.navbar-nav .dropdown').hover(function() {
			$(this).addClass('show');
		},
		function() {
			$(this).removeClass('show');
		});
	}
	 //============================== BACK TO TOP SMOOTH SCROLL=========================

	$(window).scroll(function(){
	    if ($(this).scrollTop() > 400 && $(this).width() > 750) {
	      $('.backToTop').fadeIn();
	    } else {
	      $('.backToTop').fadeOut();
	    }
	  });

	  //Click event to scroll to top
	  $('.backToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},350);
	    return false;
	  });

	//============================== MAIN SLIDER =========================
	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function() {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function() {
				$this.removeClass($animationType);
			});
		});
	}

	var $myCarousel = $('#carousel-example-generic, #carousel-example-two'),
	$firstAnimatingElems = $myCarousel.find('.carousel-item:first').find('[data-animation ^= "animated"]');

	$myCarousel.carousel();
	doAnimations($firstAnimatingElems);
	$myCarousel.carousel('pause');

	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find('[data-animation ^= "animated"]');
		doAnimations($animatingElems);
	});

	$('.main-slider .inner').on('init', function(e, slick) {
		var $firstElements = $('.slide1').find('[data-animation]');
		doAnimations($firstElements);
	});

	$('.main-slider .inner').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('div.slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});

	/* Create revolution slider function */
	function revSlider( param ) {
		jQuery(param).show().revolution({
			/* options are 'auto', 'fullwidth' or 'fullscreen' */
			delay: '6000',
			sliderLayout: 'auto',
			responsiveLevels: [1400, 1366, 992, 480],
			gridwidth:[1400, 1366, 992, 480],
			gridheight:[900, 600, 550, 500],
			stopLoop: 'on',
			stopAfterLoops: 0,
			stopAtSlide: 1,
			navigation: {
				arrows: {
					enable: true,
					style: 'arrow-icon',
					hide_onleave: false
				},
				bullets: {
					enable: false,
					style: 'hesperiden',
					hide_onleave: false,
					h_align: 'center',
					v_align: 'bottom',
					h_offset: 0,
					v_offset: 20,
					space: 5
				}
			}
		});
	}

	var revId = $('#rev_slider_1');
	if (revId.length) {
		revSlider(revId);
	}

	$('.kit-testimonial-carousel').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('#project-carousel').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	/* Slick Slider for Element carousels */
	$('#brands').slick({
		autoplay: true,
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: true,
					autoplaySpeed: 3000
				}
			}
		]
	});

	$('#image-carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					arrows: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: true,
					autoplaySpeed: 3000
				}
			}
		]
	});

	$('#card').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
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
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false,
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: true,
					autoplaySpeed: 2000
				}
			}
		]
	});

	$('#testimonial').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: true,
					autoplaySpeed: 3000
				}
			}
		]
	});
	/* Slick Slider for Main pages carousels */
	$('.slick_brands').slick({
		infinite: true,
		slidesToShow: 4,
		autoplay: true,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: true,
					autoplaySpeed: 3000
				}
			}
		]
	});

	$('.event_carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000
	});
	//============================== PROGRESS =========================

	$('.progress-bar').each(function(){
		$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
	  var each_bar_width = $(this).attr('aria-valuenow');
	  $(this).width(each_bar_width + '%');
	});


	//============================== CIRCLE PROGRESS =========================

	var el = $('.circle1'),
	inited = false;

	el.appear({ force_process: true });

	el.on('appear', function() {
		if (!inited) {
			el.circleProgress({
				size : 150
			});
			inited = true;
		}
	});

	//============================== VIDEOBOX =========================
	var videoBox = $('.video-box i');
	videoBox.on('click', function(){
		$('.hide').css('display', 'none');
		var video = '<iframe class="embed-responsive-item"  allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
		$(this).replaceWith(video);
	});


	//============================== CHARTJS =========================


	//============================== daterangepicker =========================
	$('input[name="dateRange"]').daterangepicker({
		autoUpdateInput: false,
		singleDatePicker: true,
		locale: {
			cancelLabel: 'Clear'
		}
	});

	$('input[name="dateRange"]').on('apply.daterangepicker', function (ev, picker) {
		$(this).val(picker.startDate.format('MM/DD/YYYY'));
	});

	$('input[name="dateRange"]').on('cancel.daterangepicker', function (ev, picker) {
		$(this).val('');
	});

	//============================== SELECT BOX =========================

	$('.select-drop').selectbox();

	$('.box-video').click(function(){
		$('iframe',this)[0].src += '&amp;autoplay=1';
		$(this).addClass('open');
	});

	//============================== TIMER =========================
	$('.simple_timer').syotimer({
		year: 2019,
		month: 7,
		day: 8,
		hour: 20,
		minute: 30
	});

	//============================== COUNTER-UP =========================
	var counter = $('#counter');
	if (counter.length) {
		var a = 0;
		$(window).scroll(function () {
			var oTop = counter.offset().top - window.innerHeight;
			if (a === 0 && $(window).scrollTop() > oTop) {
				$('.counter-value').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					},
						{
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.floor(this.countNum));
							},
							complete: function () {
								$this.text(this.countNum);
								//alert('finished');
							}

						});
				});
				a = 1;
			}
		});
	}


	//============================== MAP =========================

		function initialize() {
			var styleArray = [
    {
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#444444'
            }
        ]
    },
    {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [
            {
                'color': '#f2f2f2'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': -100
            },
            {
                'lightness': 45
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [
            {
                'color': '#46bcec'
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#aad2e3'
            }
        ]
    }
];

			var myLatLng = {lat: 40.759818, lng: -73.937554};

			var mapOptions = {
				zoom: 12,
				scrollwheel: false,
				center: new google.maps.LatLng(40.759818, -73.937554),
				styles: styleArray
			};

			var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
			var image = 'assets/img/marker.png';
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon : image
			});
		}
		var mapId = $('#googleMap');
		if (mapId.length) {
			google.maps.event.addDomListener(window, 'load', initialize);
		}


	//============================== ISOTOP =========================
	var grid = $('.portfolio_grid');

	var $grid = $('.portfolio_grid').imagesLoaded(function () {
		// init Isotope after all images have loaded
		$grid.isotope({
			itemSelector: '.element-item',
			layoutMode: 'fitRows'
		});
	});

	if(grid.length) {
		grid.isotope({
			itemSelector : '.element',
			layoutMode : 'fitRows'
		});

		$('#filters .button').on('click', function() {
			$('#filters .button').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$('.portfolio_grid').isotope({
				filter : selector
			});
			return false;
		});
	}

	//=========================== FANCYBOX ==========================

	$('.quick_view').fancybox({
		baseClass : 'quick-view-container',
		infobar   : false,
		buttons   : false,
		thumbs    : false,
		margin    : 0,
		touch     : {
			vertical : false
		},
		animationEffect    : false,
		transitionEffect   : 'slide',
		transitionDuration : 500,
		baseTpl :
		'<div class="fancybox-container" role="dialog">' +
		'<div class="quick-view-content">' +
		'<div class="quick-view-carousel">' +
		'<div class="fancybox-stage"></div>' +
		'</div>' +
		'<div class="quick-view-aside"></div>' +
		'<button data-fancybox-close class="quick-view-close">X</button>' +
		'</div>' +
		'</div>',

		onInit : function( instance ) {
			/*
			#1 Create bullet navigation links
			=================================
			*/
			var bullets = '<ul class="quick-view-bullets">';

			for ( var i = 0; i < instance.group.length; i++ ) {
				bullets += '<li><a data-index="' + i + '" href="javascript:;"><span>' + ( i + 1 ) + '</span></a></li>';
			}

			bullets += '</ul>';

			$( bullets ).on('click touchstart', 'a', function() {
				var index = $(this).data('index');

				$.fancybox.getInstance(function() {
					this.jumpTo( index );
				});

			})
			.appendTo( instance.$refs.container.find('.quick-view-carousel') );
			/*
			#2 Add product form
			===================
			*/
			var $element = instance.group[ instance.currIndex ].opts.$orig;
			var form_id  = $element.data('qw-form');

			instance.$refs.container.find('.quick-view-aside').append(

				// In this example, this element contains the form
				$( '#' + form_id ).clone( true ).removeClass('hidden')
			);
		},
		beforeShow : function( instance ) {
			/*
			Mark current bullet navigation link as active
			*/
			instance.$refs.container.find('.quick-view-bullets')
			.children()
			.removeClass('active')
			.eq( instance.currIndex )
			.addClass('active');
		}

	});

})(jQuery);
