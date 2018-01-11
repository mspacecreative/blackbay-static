// MOBILE NAVIGATION
$('.mobile-nav li.menu-item-has-children').prepend('<span class="sub-toggle"><i class="fa fa-angle-down"></i></span>');
$('span.sub-toggle').click(function (){
  var myUL = $(this).siblings(".sub-menu").slideToggle();
});
$('span.sub-toggle').click(function (){
$(this).children().toggleClass('fa-angle-down fa-angle-up');
});

// HAMBURGER ICON ANIMATION
$('.hamburger').click(function() {
	$('.hamburger, body').toggleClass('is-active');
});

// FULL HEIGHT HER0
function heroBanner() {
	//$('.hero').outerHeight($(window).height());
	$('.version-3 .hero').outerHeight($(window).height()-$('header').outerHeight());
}

// HALF HEIGHT VIEWPORT
function halfHeight() {
	//$('.photo-gallery').outerHeight($(window).height()-$('header').outerHeight());
	var half = parseInt($('.left-content').outerHeight()) / 2;
	$('.photo-gallery, .google-map').css('height',half);
}

// EQUAL HEIGHT SECTIONS
/*function equalSections() {
	var ctaHeight = $('.cta').height();
	$('.current-projects').height(ctaHeight);
	$('.right-content').css('height', $('.left-content').outerHeight());
	$('.current-projects, .cta, .right-content, .left-content').equalHeights();
}*/

// HAMBURGER VERTICAL ALIGN
function hamburgerIcon() {
	$('.hamburger').css('height', $('header').height());
}

// SMOOTH SCROLL
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
$(document).ready(function () {
    heroBanner();
    halfHeight();
    hamburgerIcon();
    /*equalSections();*/
    // SLICK SLIDER
    $('.photo-gallery').slick({
        dots: true,
        autoplay: true,
        arrows: true
     });
     
    $('.hero').slick({
        arrows: false,
        autoplay: true,
        speed: 1000
     });
});

$(window).resize(function () {
    heroBanner();
    halfHeight();
    //equalSections();
    hamburgerIcon();
});