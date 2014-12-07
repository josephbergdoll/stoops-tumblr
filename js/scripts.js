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

  var windowTop = $(window).scrollTop();
  if (windowTop >= $('.blog').offset().top) {
    $('.page-index .header-bg').addClass('fade-in');
  }

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

  // Click for more
  $('.scroll-for-more').click(function(event) {
    event.preventDefault();
    $('html, body').animate({"scrollTop":"0px"},800);
    $('.splash').animate({"opacity":"0"},800, function() {
      $('.splash').remove();
    });
    $('.blog').animate({"top":"0px"},800, function() {
      $('.blog').addClass('static');
      $('.page-index .header-bg').addClass('fade-in');
    }); 
  });

  // Fit Videos
  $(".js-fit-video").fitVids();

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

   var svg = new Walkway({
    selector: '#splash_logo',
    duration: '2000'
  });


  // Draw Splash Logo

  setTimeout(function() {
    $('.splash-logo').addClass('show');
    svg.draw(function() {
      setTimeout(function() {
        $('.splash-logo').addClass('finished');
      },100);
    });
  }, 300);

  // Instagram Feed
  var instagramFeed = new Instafeed({
    get: 'user',
    userId: 27117248,
    template: '<a class="ig-tile" href="{{link}}" target="new"><img src="{{image}}" /></a>',
    clientId: 'abde2260b5764c5c9016f1c8674732b4',
    accessToken: '27117248.467ede5.c9a017b20fea4340ad6c38f4af83e9c8',
    limit: '6',
    resolution: 'standard_resolution',
    target: 'instagram',
  });

  instagramFeed.run();

});

$(window).load(function() {
  

});

$(window).on("scroll", function(e) {
  if($(".splash").length&&$(".splash").is(":visible")) {
    var scrollDistance = $(window).scrollTop();
    if (scrollDistance < $('.blog').offset().top) {
      var splashHeight = $('.splash').outerHeight();
      if (scrollDistance > (splashHeight/5)) {
        $(window).off('scroll');
        $('html, body').animate({"scrollTop":"0px"},800);
        $('.splash').animate({"opacity":"0"},800, function() {
          $('.splash').remove();
        });
        $('.blog').animate({"top":"0px"},800, function() {
          $('.blog').addClass('static');
          $('.page-index .header-bg').addClass('fade-in');
        }); 
      }
    }
  }

});