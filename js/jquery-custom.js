/**
 *
 *  ---------------------------------------------------------------------------
 *
 *  Template   : Hungry - A One-Page HTML Restaurant Template
 *  Author     : Subatomic Themes
 *  Author URI : http://themeforest.net/user/SubatomicThemes
 *  
 *  ---------------------------------------------------------------------------
 *
 */
jQuery(document).ready(function($) {

	"use strict";
	
	var window_width = $(window).width();
	
	/**
	 *  The "Back-to-top" Button
	 *  -----------------------------------------------------------------------
	 */
	$('#btt').on( 'click', function( e ) {
	
		e.stopPropagation();
		$('body, html').animate( { scrollTop: 0 }, 400 );
	
	});
	
	/**
	 *  Setup Parallax Backgrounds
	 *  -----------------------------------------------------------------------
	 *  $.parallax( xPos, speed, offset );
	 */
	if( window_width > 1024 ) {
	
		$('#subpage-header').parallax( '50%', 0.3 );
		$('#hungry-testimonials').parallax( '50%', 0.3 );
		$('#hungry-slogan-01').parallax( '50%', 0.3, -400 );
		$('#hungry-slogan-02').parallax( '50%', 0.3 );
		$('#hungry-blog').parallax( '50%', 0.1, -400 );
		
	}
	
	/**
	 *  Setup Textillate
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://jschr.github.io/textillate/
	 */
	$('.tlt').textillate({
	
		selector		: '.header-texts',
		loop			: true,
		minDisplayTime	: 6000,
		initialDelay	: 0,
		autoStart		: true,
	
		in : {
		
			effect		: 'flipInX',
			delayScale	: 1.8,
			delay		: 45,
			sync		: false,
			shuffle		: false,
			reverse		: false
			
		},

		out : {
		
			effect		: 'bounceOut',
			delayScale	: 1.8,
			delay		: 45,
			sync		: false,
			shuffle		: false,
			reverse		: true
			
		}

	});
	
	/**
	 *  Call Masonry
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://masonry.desandro.com/options.html
	 */
	$('.hungry-gallery').imagesLoaded( function() {
		$('.hungry-gallery').masonry({

			columnWidth		: '.hungry-gallery-item',
			itemSelector	: '.hungry-gallery-item',
			gutter			: 20
	
		});
	});
	
	/**
	 *  Setup Local Scroll
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following links:
	 *  https://github.com/flesler/jquery.localScroll
	 *  https://github.com/flesler/jquery.scrollTo
	 */
	$.localScroll({
	
		duration	: 1200,
		hash		: true,
		offset		: { top : -80 }
		
	});
	
	/**
	 *  Setup Nice Scroll
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://areaaperta.com/nicescroll/
	 */
	$('html').niceScroll({
	
		cursorcolor			: '#000',
		cursoropacitymin	: 0.4,
		cursoropacitymax	: 1,
		cursorborder		: '1px solid transparent',
		cursorborderradius	: '6px',
		zindex 				: 9999,
		scrollspeed			: 200
	
	});
	
	/**
	 *  Setup Tooltipster
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://iamceege.github.io/tooltipster/
	 */
	 
	// For the Social Icons in the header
	$('.header-social-icon-tooltip').tooltipster({
	
		animation	: 'grow',
		speed		: 400,
		delay		: 0,
		position	: 'bottom'
	
	});
	
	// For the "Special" menu items
	$('.special-tooltip').tooltipster({
	
		animation	: 'grow',
		speed		: 400,
		delay		: 0,
		position	: 'top'
	
	});
	
	// For the "Team" section Social Icons
	$('.team-tooltip').tooltipster({
	
		animation	: 'fade',
		speed		: 400,
		delay		: 0,
		position	: 'top'
	
	});
	
	/**
	 *  Setup WOW
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://mynameismatthieu.com/WOW/docs.html
	 */
	if( window_width > 768 ) {
	
		new WOW().init();
		
	}
	
	/**
	 *  Setup Colorbox
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://www.jacklmoore.com/colorbox/
	 */
	if( window_width > 767 ) { // Let mobiles load images in natively
	
		$('.lightbox').colorbox({
		
			rel				: 'lightbox',
			transition		: 'fade',
			opacity			: 0.90,
			speed			: 500,
			previous		: '&#xf104;',
			next			: '&#xf105;',
			current			: '{current} / {total}',
			close			: '&#xf00d;',
			slideshow		: false,
			slideshowStart	: '&#xf04b;',
			slideshowStop	: '&#xf04d;',
			slideshowAuto	: false
		
		});
	
		// Lightbox for Gallery items
		$('.lightbox-gallery').colorbox({
		
			rel				: 'lightbox-gallery',
			transition		: 'fade',
			opacity			: 0.90,
			speed			: 500,
			previous		: '&#xf104;',
			next			: '&#xf105;',
			current			: '{current} / {total}',
			close			: '&#xf00d;',
			slideshow		: false,
			slideshowStart	: '&#xf04b;',
			slideshowStop	: '&#xf04d;',
			slideshowAuto	: false
		
		});
		
	}
	
	/**
	 *  Call Superfish
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://users.tpg.com.au/j_birch/plugins/superfish/options/
	 */
	if( window_width > 1024 ) {
	
		$('.sf-menu').superfish({
		
			delay 		: 250,
			animation	: { opacity : "show" },
			speed		: 250,
			cssArrows	: false
		
		});
		
	}
	
	/**
	 *  Sticky Navigation functionality.
	 *  -----------------------------------------------------------------------
	 */
	if( window_width > 1024 ) {
	
		if( $('body, html').scrollTop() > 10 ) {
			$('.site-navbar').addClass('short');
		}
	
	}
	
	$(window).scroll(function() {
	
		var window_width = $(window).width();
		if( window_width > 1024 ) {
		
			if( $(this).scrollTop() > 10 ){
				$('.site-navbar').addClass('short');
			} else {
				$('.site-navbar').removeClass('short');
			}
			
		}
		
		if( $(this).scrollTop() > 500 ){
			$('#btt').fadeIn( 500 );
		} else {
			$('#btt').fadeOut( 500 );
		}
	
	});
	
	$(window).resize(function() {
	
		var window_width = $(window).width();
		if( window_width < 1025 ) {
		
			$('.sf-menu').superfish( 'destroy' );
			if( $('.site-navbar').hasClass('short') ) {
				$('.site-navbar').removeClass('short');
			}
		
		}
		
		if( window_width > 1007 ) {
		
			$('.sf-menu').superfish({
		
				delay 		: 250,
				animation	: { opacity : "show" },
				speed		: 250,
				cssArrows	: false
		
			});	
			
			if( $('body, html').scrollTop() > 10 && ! $('.site-navbar').hasClass('short') ) {
				$('.site-navbar').addClass('short');
			}
		
		}
	
	});

	/**
	 *  Mobile Navigation functionality.
	 *  -----------------------------------------------------------------------
	 */
	$('.mobile-nav').on( 'click', function( e ) {
		e.stopPropagation();
		var window_width = $(window).width();
		if( window_width < 1025 ) {
			$('.main-navigation').slideDown( 800 );
		}
	});
	
	$('.mobile-close, .sf-menu li a').on( 'click', function( e ) {
		e.stopPropagation();
		var window_width = $(window).width();
		if( window_width < 1025 ) {
			$('.main-navigation').slideUp( 800 );
		}
	});
	
	/**
	 *  Call the jQuery UI Date Picker
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://jqueryui.com/datepicker/
	 *
	 *  This example disables day 3 (Wednesday) to be pickable from 
	 *  the calendar.
	 *
	 */
	if( jQuery.ui ) { // Not all pages need jQuery UI...
	 
		if( window_width > 1024 ) { // Let mobiles use their own Datepickers...
		
			$('#res_date').datepicker({
			
				dateFormat : 'DD, d MM, yy',
				beforeShowDay: function(date) {
				
					var day = date.getDay();
					return [(day != 3 )]; // Wednesday (day 3) is returned false!
					
				}
			
			});
		
		}
	
	}
	 
	/**
	 *  Call the Validator
	 *  -----------------------------------------------------------------------
	 *  For a more information on this plugin, please visit the following link:
	 *  http://jqueryvalidation.org/
	 *
	 *  This example validates all the fields within the reservation form. Error
	 *  messages can be configured below.
	 *
	 */
	$('#hungry-reservarion-form-outcome').hide();
	$('#hungry-reservation-form').validate({
	
		rules : 
		{
			res_name	: { required : true },
			res_email	: { required : true, email : true },
			res_phone	: { required : true, number : true },
			res_amount	: { required : true },
			res_date 	: { required : true },
			res_time	: { required : true }
		},
		
		messages :
		{
			res_name	: 'Please provide a name!',
			res_email	: { required : 'Please provide an email address!', email : 'Please enter a valid email address!' },
			res_phone	: { required : 'Please provide a contact number!', number : 'Please enter a valid contact number!' },
			res_amount	: 'Please select the size of your party!',
			res_date	: { required : 'Please choose a date!' },
			res_time	: 'Please choose a time!'
		},
		
		submitHandler	: function(form) {
		
			var res_name	= $('input#res_name').val();
			var res_email	= $('input#res_email').val();
			var res_phone	= $('input#res_phone').val();
			var res_amount	= $('select#res_amount').val();
			var res_date	= $('input#res_date').val();
			var res_time	= $('select#res_time').val();
			var res_message	= $('textarea#res_message').val();
			
			$.ajax({
			
				type	: 'post',
				url		: 'php/process-reservation.php',
				data	: 'res_name=' + res_name + '&res_email=' + res_email + '&res_phone=' + res_phone + '&res_amount=' + res_amount + '&res_date=' + res_date + '&res_time=' + res_time + '&res_message=' + res_message,
				success	: function(results) {
				
					$('#hungry-reservation-form-outcome').html(results);
					$('#hungry_reservarion_form_outcome').slideDown( 2000 );
				
				}
			
			});
		
		}
	
	});
	
});

/**
 *  Site Preloader
 *  -----------------------------------------------------------------------
 */
jQuery(window).load(function() {

	jQuery('#hungry-preloader-container').fadeOut( 'slow' );

});