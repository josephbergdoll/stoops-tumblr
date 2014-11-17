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

  // Open Nav
  $('.link-to-nav').click(function(e) {
    var wrapperHeight = $('.main-nav .nav-inner').outerHeight();
    var navHeight = wrapperHeight + 1;
    e.preventDefault();
    $('body').toggleClass('mobile-nav-opened');
    if ( $('body').hasClass('mobile-nav-opened') ) {
      $('.main-nav').css( "height", navHeight );
    }
    else {
      $('.main-nav').removeAttr('style');
    }
  });

  // Photoset
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