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
          
// anime js text animation    
    
// Wrap every letter in a span
//$('.text-animate').each(function(){
//  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
//});
//
//anime.timeline({loop:false})
//  .add({
//    targets: '.text-animate .letter',
//    translateX: [50,0],
//    translateZ: 0,
//    opacity: [0,1],
//    easing: "easeOutCubic",
//    duration: 2000,
//    delay: function(el, i) {
//      return 500 + 30 * i;
//    }
//});
    
 
//    crazy offset timeline 
    
//var timelineParameters = anime.timeline({
//  direction: 'alternate',
//  loop: true
//});
//
//timelineParameters
//  .add({
//    targets: '#timelineParameters .jaxx-logo-text.el',
//    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
//    translateY: [ { value: 30 }, { value: 60 }, { value: 60 } ],
//    duration: 3000
//  })
//    .add({
//    targets: '#timelineParameters .cursive-2.el',
//    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
//    translateY: [ { value: 30 }, { value: -100 }, { value: -30 } ],
//    duration: 3000,
//    offset: 200
//  })
//  .add({
//    targets: '#timelineParameters .h5.el',
//    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
//    translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
//    duration: 3000,
//    offset: 200
//  })
//  .add({
//    targets: '#timelineParameters .btn.el',
//    translateX: [ { value: 80 }, { value: 250 } ],
//    translateY: [ { value: -60 }, { value: -30 }, { value: -30 } ],
//    duration: 3000,
//    offset: 400
//  });

// BS carousel
  
$('.carousel').carousel({
    interval: false
})
     
//GSAP + Scroll Magic
    
// init
var controller = new ScrollMagic.Controller();
   
//one-off tweens
     
TweenMax.from(".jaxx-logo-jumbo", 1, {opacity:0, x:-100});
     
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
  .staggerFrom($(this).find(".content-stagger-up"), 1, {y: 200, autoAlpha: 0, delay: 0,ease: Power2.easeOut}, .1);

	var scene4 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(contentTween)
		.addTo(controller);
});
      
    
    
    
  $("#play").click(function(){
  TweenMax.staggerTo("#about h1", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
  TweenMax.staggerTo("h2", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
  TweenMax.staggerTo("p", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
  TweenMax.staggerTo(".btn", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);    
  TweenMax.staggerTo(".btn", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);    
  TweenMax.to(".text-replace", 1, {autoAlpha:1, x: 0, ease:Back.easeIn});

//      TweenMax.staggerFrom(".text-replace", 1, {opacity:0, y:30, ease:Power4.easeIn}, 0.5, "-=0.5")
//      TweenMax.fromTo("h1.text-replace", 1, {css: {left: 100, top: 100, opacity:0, visibility: hidden}}, {css:{left:0, top: 0, opacity: 1, visibility: visible}} );
});  


    
    
    

//smooth scroll


//  // Add smooth scrolling to all links
//  $("a").on('click', function(event) {
//
//    // Make sure this.hash has a value before overriding default behavior
//    if (this.hash !== "") {
//      // Prevent default anchor click behavior
//      event.preventDefault();
//
//      // Store hash
//      var hash = this.hash;
//
//      // Using jQuery's animate() method to add smooth page scroll
//      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//      $('html, body').animate({
//        scrollTop: $(hash).offset().top
//      }, 1500, function(){
//   
//        // Add hash (#) to URL when done scrolling (default click behavior)
////        window.location.hash = hash;
//      });
//    } // End if
//  });
    
    
    

    
//end doc ready
});




