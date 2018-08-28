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
 
//close mobile menu on li click and body click
     
$('.navbar-nav>li>a, body').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
     
     
// Rellax parallax
     
  var rellax = new Rellax('.rellax', {
//    wrapper: '.rellax-wrap',
    speed: -1,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
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
tl.from(".navy-bg", 0.5, {autoAlpha:0, ease: SlowMo.easeIn});

//tl.staggerFromTo("#home .navbar-brand, #home .nav-item", 0.5, {opacity:0, y:-10}, {opacity:1, y:0}, 0.1);
     
//fade in nav + nav links
tl.staggerFrom("#home .navbar-brand, #home .nav-item, #home .navbar-toggler", 0.2, {y:-10, autoAlpha:0, rotation:-20}, 0.1);
      
//fade in Jaxx Liberty Logo
//tl.from("#banner .site-title-2", 1.5, {autoAlpha:0, ease: SlowMo.easeInOut});
tl.from("#home .jaxx-logo", 2, {autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.5");
         
//fade out Jaxx Logo
//tl.to("#banner .jaxx-logo", 2, {autoAlpha:0, display: "none", ease: SlowMo.easeInOut});

//fade out multi device bg
tl.to("#home #jaxx-multi-device", 1, {autoAlpha:0, display: "none", ease: SlowMo.easeInOut});

// fade in logo fill 
tl.to("#home .jaxx-logo .st1", 1, {fill:"#ff6902", ease: SlowMo.easeIn});
     
// fade in logo fill 
tl.to("#home .jaxx-logo .st0", 1, {fill:"#fff", ease: SlowMo.easeIn}, "-=0.5");
 
// explode out left JAX
tl.to("#home .jaxx-logo .st0", 0.5, {y:1000, ease: Power4.easeInOut}, "-=0.25");

// explode out down X
tl.to("#home .jaxx-logo .st1", 0.5, {x:-1000, ease: Power4.easeInOut}, "-=0.25");

// explode out down Liberty
tl.staggerTo("#home .jaxx-logo .st2", 0.5, {y:-1000, ease: Power4.easeInOut}, 0.1);

//fade in orange-bg 
tl.from("#home .orange-bg", 0.5, {autoAlpha:0, ease: SlowMo.easeInOut});

//fade out Jaxx Logo
tl.to("#home .jaxx-logo", 0.5, {autoAlpha:0, display: "none", ease: SlowMo.easeInOut});
    
//fade in tag line
tl.from("#home .site-title", 0.5, {y:-100, autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.5");
 
 //fade out liberty to make overlay text legible
//tl.to("#banner .site-title-3", 1, {autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.5");
    
//use position parameter "-=0.5" to schedule next tween 0.25 seconds before previous tweens end.
//fade in tag line sub title
//tl.from("#banner .site-sub-title", 1, {left:100, autoAlpha:0, ease: Back.easeInOut}, "-=0.5");
    
//fade in tag line sub titles
tl.staggerFrom(".sub-tagline-1, .sub-tagline-2, .sub-tagline-3", 0.2, {y:-20, autoAlpha:0, ease: SlowMo.easeInOut}, 0.5);
   
//fade in bg image
tl.from("#home .img-full", 1, {autoAlpha:0, ease: Power1.easeIn}, "-=0.5");    
 
// fade in heart svg bg
tl.from("#home .jaxx-heart-logo", 0.5, {y:-10, autoAlpha:0, ease: Back.easeInOut}, "-=0.25");

// fade in heart logo
tl.from("#home .jaxx-icon", 0.7, {y:-20, autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.25");

//add a label 0.5 seconds later to mark the placement of the next tween
tl.from("#home .btn", 0.5, {autoAlpha:0, ease: SlowMo.easeIn}, "-=0.25");
  
//fade in arrow down
tl.from("#home i", 0.5, {autoAlpha:0, y:-10, ease: SlowMo.easeIn}, "-=0.25");
     
     
//downloads banner animation timeline
var tl2 = new TimelineLite();
    tl2.staggerFrom("#banner h1 span", 0.5, {autoAlpha:0, x:-500, rotation: -100, ease: SlowMo.easeIn}, 0.1)
       .from("#banner .jaxx-navbar-brand", 0.5, {autoAlpha:0, y: -20, ease: SlowMo.easeIn})
       .staggerFrom("#banner h2 span", 0.5, {autoAlpha:0, y: 20, ease: SlowMo.easeIn}, 0.1)
       .from("#banner .btn", 0.1, {autoAlpha:0, y: 20, ease: SlowMo.easeIn}, "-=0.25");
                 
// individual tweens
      
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
            triggerHook: 'this',
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
            triggerHook: '0.8',
//            triggerHook: 'onEnter',
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
    document.querySelector('#features .btn').addEventListener('click', e => explode(e.pageX, e.pageY));
    document.querySelector('#download .btn').addEventListener('click', e => explode(e.pageX, e.pageY));
    document.querySelector('button').addEventListener('click', e => explode(e.pageX, e.pageY));
    document.querySelector('#community .btn').addEventListener('click', e => explode(e.pageX, e.pageY));
//    document.querySelector('#download .btn').addEventListener('mouseover', e => explode(e.pageX, e.pageY));
     
     
     
//end doc ready
});




