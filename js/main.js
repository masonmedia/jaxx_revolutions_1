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
tl.from(".bg-img-banner-2", 0.5, {autoAlpha:0, ease: SlowMo.easeIn});

//tl.staggerFromTo("#home .navbar-brand, #home .nav-item", 0.5, {opacity:0, y:-10}, {opacity:1, y:0}, 0.1);
     
//fade in nav + nav links
tl.staggerFrom("#home .navbar-brand, #home .nav-item", 0.2, {y:-10, autoAlpha:0}, 0.1);
     
//fade in Jaxx Liberty Logo
//tl.from("#banner .site-title-2", 1.5, {autoAlpha:0, ease: SlowMo.easeInOut});
tl.from("#banner .jaxx-logo-jumbo", 1, {autoAlpha:0, ease: SlowMo.easeInOut});
     
//fade out Jaxx
//tl.to("#banner .site-title-2", 1, {autoAlpha:0, display: "none", ease: SlowMo.easeInOut});
tl.to("#banner .jaxx-logo-jumbo", 2, {autoAlpha:0, display: "none", ease: SlowMo.easeInOut}, "+=0.5");
     
//fade in liberty
//tl.from("#banner .site-title-3", 1.5, {autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.25");
     
//use position parameter "+=0.5" to schedule next tween 0.5 seconds after previous tweens end
tl.from("#banner .site-title", 1, {y:-100, autoAlpha:0, ease: SlowMo.easeInOut}, "+=0.5");
     
 //fade out liberty to make overlay text legible
//tl.to("#banner .site-title-3", 1, {autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.5");
    
//use position parameter "-=0.5" to schedule next tween 0.25 seconds before previous tweens end.
//great for overlapping
tl.from("#banner .site-sub-title", 1, {left:100, autoAlpha:0, ease: Back.easeInOut}, "-=0.5");
     
//     fade in heart logo
tl.from("#banner .jaxx-icon", 1, {y:-10, autoAlpha:0, ease: Back.easeInOut}, "-=0.5");

//add a label 0.5 seconds later to mark the placement of the next tween
tl.from("#banner .btn", 0.5, {autoAlpha:0, ease: Back.easeInOut}, "-=0.5");
//to jump to this label use: tl.play("stagger");
  
//fade in arrow down
tl.from("#banner i", 0.5, {autoAlpha:0, y:-10, ease: Power1.easeIn}, "-=0.5");
     
//fade in bg image
tl.from("#banner .img-full", 1, {autoAlpha:0, ease: Power1.easeIn}, "-=0.5");    
     
//anime js svg amination
     
     var lineDrawing = anime({
      targets: '#jaxx_liberty .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutCubic',
      duration: 3500,
      delay: function(el, i) { return i * 250 },
//      delay: 6000,
    //  delay: function(el, i) { return 1000 + (i * 100); },
      direction: 'alternate',
      fillOpacity: [0, 1],
      loop: false
      });
     
//     multidevice animation 
     
     var multiDevice = anime({
      targets: '#Laptop path, circle',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 100 },
      direction: 'alternate',
      loop: true
      });
     
     var multiDevice2 = anime({
      targets: '#IPAD path, rect',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuart',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
      });
     
     var multiDevice3 = anime({
      targets: '#iphone path, ellipse',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutCubic',
      duration: 3500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
      });
     
//jaxx heart animation

     var lineDrawing = anime({
      targets: '#jaxx_heart .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 150 },
      delay: 6000,
      direction: 'alternate',
      fillOpacity: [0, 1],
      loop: false
      });
     
     
//bg colors
//     var multiDevice4 = anime({
//      targets: '.colors',
//      backgroundColor: [
//        {value: '#fff'},
//        {value: '#fff'},
//        {value: '#ff6902'},
//        {value: 'rgb(38, 65, 118)'},
//        {value: 'rgb(64, 224, 208)'}
//      ],
//      easing: 'easeInOutSine',
//      elasticity: 300,
//      direction: 'alternate',
//      duration: 6000,
//      loop: true
//    });
     
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
      
    
// button explode 
// https://codepen.io/ethanryan/pen/GjLdyJ

    const colors = [ '#ffc000', '#ff3b3b', '#ff8400', 'blue', 'indigo', 'palegreen'];
    const bubbles = 25;

    const explode = (x, y) => {
        let particles = [];
        let ratio = window.devicePixelRatio;
        let c = document.createElement('canvas');
        let ctx = c.getContext('2d');

        c.style.position = 'absolute';
        c.style.left = (x - 100) + 'px';
        c.style.top = (y - 100) + 'px';
        c.style.pointerEvents = 'none';
        c.style.width = 200 + 'px';
        c.style.height = 200 + 'px';
        c.style.zIndex = 100;
        c.width = 200 * ratio;
        c.height = 200 * ratio;
        document.body.appendChild(c);

        for(var i = 0; i < bubbles; i++) {
            particles.push({
                x: c.width / 2,
                y: c.height / 2,
                radius: r(20, 30),
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: r(0, 360, true),
                speed: r(8, 12),
                friction: 0.9,
                opacity: r(0, 0.5, true),
                yVel: 0,
                gravity: 0.1
            });
        }

        render(particles, ctx, c.width, c.height);
        setTimeout(() => document.body.removeChild(c), 1000);
    }

    const render = (particles, ctx, width, height) => {
        requestAnimationFrame(() => render(particles, ctx, width, height));
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p, i) => {
            p.x += p.speed * Math.cos(p.rotation * Math.PI / 180);
            p.y += p.speed * Math.sin(p.rotation * Math.PI / 180);

            p.opacity -= 0.01;
            p.speed *= p.friction;
            p.radius *= p.friction;
            p.yVel += p.gravity;
            p.y += p.yVel;

            if(p.opacity < 0 || p.radius < 0) return;

            ctx.beginPath();
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
            ctx.fill();
        });

        return ctx;
    }

    const r = (a, b, c) => parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));

    document.querySelector('.btn').addEventListener('click', e => explode(e.pageX, e.pageY));
    document.querySelector('.btn').addEventListener('mouseover', e => explode(e.pageX, e.pageY));
    document.querySelector('#features .btn').addEventListener('click', e => explode(e.pageX, e.pageY));
    document.querySelector('#features .btn').addEventListener('mouseover', e => explode(e.pageX, e.pageY));
    document.querySelector('#download .btn').addEventListener('click', e => explode(e.pageX, e.pageY));
    document.querySelector('#download .btn').addEventListener('mouseover', e => explode(e.pageX, e.pageY));
     
     
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




