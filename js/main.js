 $(document).ready(function() {

// page transitions
    
$(".animsition").animsition({
    inClass: 'fade-in-down-sm',
    outClass: 'fade-out-up-sm',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: false,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
//    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
     
     
//nav change color on scroll 
     
$(document).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
           
     
// Rellax parallax
 $(document).ready(function() {
// Also can pass in optional settings block
  var rellax = new Rellax('.rellax', {
    wrapper: '.rellax-wrap',
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
 });
     
     
//GSAP + Scroll Magic
    
// init
    
var controller = new ScrollMagic.Controller();
     
// pin rows + "wipe" slides under each other

// get all slides
var slides = document.querySelectorAll("div.pin");

// create scene for every slide
for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
            triggerElement: slides[i],
            triggerHook: 'onLeave',
			duration: "120%",
			reverse: true
        })
        .setPin(slides[i])
        .addTo(controller);
}
 
   
//GSAP tweens
      
//home pager banner timeline 
     
var tl = new TimelineLite();

//add a from() tween at the beginning of the timline
tl.from(".bg-img-banner-2", 1, {autoAlpha:0, ease: SlowMo.easeIn});

//fade in Jaxx
tl.from("#banner .site-title-2", 3, {autoAlpha:0, ease: SlowMo.easeInOut});
     
//fade out Jaxx
tl.to("#banner .site-title-2", 1.5, {autoAlpha:0, display: "none", ease: SlowMo.easeInOut});
     
//fade in liberty
tl.from("#banner .site-title-3", 1.5, {autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.25");
     
//use position parameter "+=0.5" to schedule next tween 0.5 seconds after previous tweens end
tl.from("#banner .site-title", 1, {y:-100, autoAlpha:0, ease: SlowMo.easeInOut}, "+=0.5");
     
 //fade out liberty to make overlay text legible
tl.to("#banner .site-title-3", 1, {autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.5");

//use position parameter "-=0.5" to schedule next tween 0.25 seconds before previous tweens end.
//great for overlapping
tl.from("#banner .site-sub-title", 1, {left:100, autoAlpha:0, ease: Back.easeInOut}, "-=0.5");

//add a label 0.5 seconds later to mark the placement of the next tween
tl.from("#banner .btn", 0.5, {autoAlpha:0, ease: Back.easeInOut});
//to jump to this label use: tl.play("stagger");
  
//fade in jaxx liberty logo
tl.from("#banner .jaxx-logo-jumbo", 2, {y:-100, autoAlpha:0, ease: Power4.easeInOut}, "-=0.5");     

//fade in nav
tl.from("#home nav", 0.5, {autoAlpha:0, y:-10, ease: Power1.easeIn}, "-=0.5");
     
     //fade in bg image
//tl.to("#banner .jumbotron .jumbotron-fluid", 1, {css:{backgroundImage:'url(img/jaxx-jump-2.jpg)'}});

//stagger the animation of all icons with 0.1s between each tween's start time
//this tween is added
//tl.staggerFrom(icons, 0.2, {scale:0, autoAlpha:0}, 0.1, "stagger");
     
     
//fade in

$(".fade-in").each(function() {

 	var fadeIn = TweenMax.from(this, 1, {
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power2.easeOut
	    }, .1);

	var scene0 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeIn)
		.addTo(controller);
});     
     
//fade + enter left - scene 1

$(".fade-in-left").each(function() {

 	var fadeLeft = TweenMax.from(this, 1, {
	        x: -100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power2.easeOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeLeft)
		.addTo(controller);
});
     
//fade in up 
     
$(".fade-in-up").each(function() {

 	var fadeLeft = TweenMax.from(this, 1, {
	        y: 100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power2.easeOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeLeft)
		.addTo(controller);
});
    
    
// Single tween item fade in and slide up... scene 2 (works)

$(".single-tween-item").each(function() {

 	var tween = TweenMax.from(this, .6, {
	        y: 40,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power2.easeOut
	    }, .1);

	var scene2 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(tween)
		.addTo(controller);
});


// stagger tween scene 3 

$(".stagger-tween").each(function() {
  
  var stagger = TweenMax.staggerFrom($(this).find(".stagger-tween-item"), 1, {
    y: 40,
    autoAlpha: 0,
    delay: 0,
    ease: Power2.easeOut
  },
  0.3);

	var scene3 = new ScrollMagic.Scene({
	        triggerElement: this,
            triggerHook: 'onEnter',
	        reverse:true
	    })
		.setTween(stagger)
		.addTo(controller);
});
      

//content-tweens scene 4
        
$(".content-tween").each(function() {
  
  var contentTweenTL = new TimelineMax({
    repeat:0,
  });
  
  var contentTween = contentTweenTL.from($(this).find(".content-tween-left"), 1, {x: -200, autoAlpha: 0, delay: 0, ease: Power2.easeOut}, .1)
  .from($(this).find(".content-tween-right"), 1, {x: 200, autoAlpha: 0, delay: 0,ease: Power2.easeOut}, .1)
  .from($(this).find(".content-tween-up"), 1, {y: 200, autoAlpha: 0, delay: 0,ease: Power2.easeOut}, .1)
  .from($(this).find(".content-tween-down"), 1, {y: -200, autoAlpha: 0, delay: 0,ease: Power2.easeOut}, .1)
  .staggerFrom($(this).find(".content-stagger-up"), 1, {y: 200, autoAlpha: 0, delay: 0,ease: Power2.easeOut}, .1);

	var scene4 = new ScrollMagic.Scene({
	        triggerElement: this,
            triggerHook: 'onEnter',
	        offset: -100,
			reverse:true
	    })
		.setTween(contentTween)
		.addTo(controller);
});
      
    
//smooth scroll


//  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
      });
    } // End if
  });
    
    
    
//end doc ready
});




