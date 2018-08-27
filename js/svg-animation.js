 $(document).ready(function() {
     
new Vivus('jaxx_liberty', {
        start: 'autostart',
        type: 'scenario',
        duration: 200,
        animTimingFunction: Vivus.EASE_IN
        },
          function (obj) {
          obj.el.classList.add('finished');
        });
    
//banner multi device
new Vivus('jaxx-multi-device', {
        start: 'autostart',
        type: 'async',
        duration: 300,
        animTimingFunction: Vivus.EASE_IN
        },
          function (obj) {
          obj.el.classList.add('finished');
        });
     
        
//new Vivus('jaxx_heart_banner', {
//        start: 'autostart',
//        type: 'async',
//        duration: 100,
//        animTimingFunction: Vivus.EASE_IN
//        },
//          function (obj) {
//          obj.el.classList.add('finished');
//        });

//downloads page banner animation
     
//new Vivus('downloads-slanted-gradient', {
//    start: 'autostart',
//    type: 'async',
//    duration: 75,
//    animTimingFunction: Vivus.EASE_IN
//    },
//      function (obj) {
//      obj.el.classList.add('finished');
//    });
//  
      
//end doc ready
 });