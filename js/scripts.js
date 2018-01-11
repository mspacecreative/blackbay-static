!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

// HAMBURGER ICON ANIMATION
$('.hamburger, .mobile-nav li').click(function() {
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