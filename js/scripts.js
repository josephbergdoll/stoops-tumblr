$(document).ready(function() {
  // Wrap image P in special tag
  $('.text-post-body p').each(function(){
    if ( ($(this).find('img').length) &&     
         (!$.trim($(this).text()).length))
    {
        $(this).addClass('img-only');
    }
    else {
      $(this).addClass('no-img');
    }
  });

  $('.js-photoset').each(function() {
    var $controlsContainer = $(this).parent().next('.js-photoset-controls');
    var $slideImg = $(this).find('li');
    $(this).flexslider({
      animation: "fade",
      easing: "swing",
      smoothHeight: false,
      useCSS: true,
      namespace: "slide-",
      slideshowSpeed: 6000,
      animationSpeed: 1200,
      directionNav: false,
      pauseOnAction: true,
      multipleKeyboard: false, 
      touch: true,
      controlNav: true,
      controlsContainer: $controlsContainer,
      start: function(slider) {
        $slideImg.click(function(event){
            event.preventDefault();
            slider.flexAnimate(slider.getTarget("next"));
        });
      }
    });
  });

});

$(window).load(function() {
  // var svg = new Walkway({
  //   selector: '#stoops_logo',
  //   duration: '2000'
  // });


  // setTimeout(function() {
  //   $('.logo').addClass('show');
  //   svg.draw(function() {
  //     console.log('Animation finished');
  //     setTimeout(function() {
  //       $('.logo').addClass('finished');
  //     },1000);
  //   });
  // }, 300);
  

});