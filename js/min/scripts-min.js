$(document).ready(function(){$(".text-post-body p").each(function(){$(this).addClass($(this).find("img").length&&!$.trim($(this).text()).length?"img-only":"no-img")}),$(".link-to-nav").click(function(n){var o=$(".main-nav .nav-inner").outerHeight(),t=o+1;n.preventDefault(),$("body").toggleClass("mobile-nav-opened"),$("body").hasClass("mobile-nav-opened")?$(".main-nav").css("height",t):$(".main-nav").removeAttr("style")}),$(".js-photoset").each(function(){var n=$(this).parent().next(".js-photoset-controls"),o=$(this).find("li");$(this).flexslider({animation:"fade",easing:"swing",smoothHeight:!1,useCSS:!0,namespace:"slide-",slideshowSpeed:6e3,animationSpeed:1200,directionNav:!1,pauseOnAction:!0,multipleKeyboard:!1,touch:!0,controlNav:!0,controlsContainer:n,start:function(n){o.click(function(o){o.preventDefault(),n.flexAnimate(n.getTarget("next"))})}})});var n=new Walkway({selector:"#splash_logo",duration:"2000"});setTimeout(function(){$(".splash-logo").addClass("show"),n.draw(function(){console.log("Animation finished"),setTimeout(function(){$(".splash-logo").addClass("finished")},100)})},300)}),$(window).load(function(){}),$(window).on("scroll",function(n){if($(".splash").length&&$(".splash").is(":visible")){var o=$(window).scrollTop();if(o<$(".blog").offset().top){var t=$(".splash").outerHeight();o>t/5&&($(window).off("scroll"),$("html, body").animate({scrollTop:"0px"},800),$(".splash").animate({opacity:"0"},800,function(){$(".splash").remove()}),$(".blog").animate({top:"0px"},800,function(){$(".blog").addClass("static"),$(".page-index .header-bg").addClass("fade-in")}))}}});